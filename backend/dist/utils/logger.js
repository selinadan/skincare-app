"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganFormat = exports.logger = void 0;
const winston_1 = require("winston");
const morgan_1 = __importDefault(require("morgan"));
const { combine, timestamp, printf, errors } = winston_1.format;
const logFormat = printf(({ level, message, timestamp, stack }) => `${timestamp} [${level}]: ${message}${stack ? `\n${stack}` : ''}`);
exports.logger = (0, winston_1.createLogger)({
    level: 'info',
    format: combine(timestamp(), errors({ stack: true }), logFormat),
    transports: [new winston_1.transports.Console()],
});
exports.morganFormat = (0, morgan_1.default)('combined', {
    stream: {
        write: (message) => exports.logger.info(message.trim()),
    },
});
