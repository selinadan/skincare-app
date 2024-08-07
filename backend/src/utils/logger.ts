import { createLogger, format, transports } from 'winston';
import chalk from 'chalk';
import morgan from 'morgan';

const { combine, timestamp, printf, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
	const levelColor: { [key: string]: any } = {
		info: chalk.green,
		warn: chalk.yellow,
		error: chalk.red,
		debug: chalk.cyan,
	};

	if (typeof message === 'object') {
		return `${timestamp} ${levelColor[level](level.toUpperCase())}: ${JSON.stringify(message)}`;
	}
	return `${timestamp} ${levelColor[level](level.toUpperCase())}: ${stack || message}`;
});

export const logger = createLogger({
	level: 'info',
	format: combine(timestamp(), errors({ stack: true }), logFormat),
	transports: [new transports.Console()],
});

export const morganFormat = morgan(
	(tokens, req, res) => {
		return [
			tokens.date(req, res, 'iso'),
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, 'content-length'),
			'bytes',
			tokens['response-time'](req, res),
			'ms',
		].join(' ');
	},
	{
		stream: {
			write: (message: string) => logger.info(message.trim()),
		},
	}
);
