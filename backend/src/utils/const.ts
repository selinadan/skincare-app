import path from 'path';

export const DATABASE_PATH = path.resolve(process.cwd(), 'database.sqlite');

export const FRONTEND_PORT = 5173;
export const BACKEND_PORT = 3000;
export const BASE_URL = `http://localhost`;
export const FRONTEND_URL = `${BASE_URL}:${FRONTEND_PORT}`;
export const BACKEND_URL = `${BASE_URL}:${BACKEND_PORT}`;

export const PATHS = {
	root: '/',
	rootId: '/:id',
	api: '/api',
	products: '/products',
};
