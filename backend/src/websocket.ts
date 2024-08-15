import { WebSocketServer } from 'ws';
import { logger } from 'Utils/logger';

const webSocketServer = new WebSocketServer({ noServer: true });

webSocketServer.on('connection', (webSocket: any) => {
	logger.info('Client connected');

	webSocket.on('close', () => logger.info('Client disconnected'));
});

export const broadcast = (data: any) =>
	webSocketServer.clients.forEach((client: any) => {
		if (client.readyState === client.OPEN) {
			client.send(JSON.stringify(data));
		}
	});

export default webSocketServer;
