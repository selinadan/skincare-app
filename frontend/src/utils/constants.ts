export const FRONTEND_PORT = 5173;
export const BACKEND_PORT = 3000;

export const PATHS = {
	root: '/',
	id: '/:id',
	api: '/api',
	products: '/products',
};

export const API_BASE_URL = `http://localhost`;
export const FRONTEND_URL = `${API_BASE_URL}:${FRONTEND_PORT}`;
export const BACKEND_URL = `${API_BASE_URL}:${BACKEND_PORT}`;

export const OILY = 'oily';
export const NORMAL = 'normal';
export const DRY = 'dry';
export const COMBO = 'combo';
export const SENSITIVE = ' sensitive';

export const ACNE_PRONE = 'acneProne';
export const TEXTURE = 'texture';
export const AGING = 'aging';
export const BRIGHTENING = 'brightening';
export const DARK_SPOTS = 'darkSpots';

export const PRODUCT_CATEGORIES = {
	cleanser: 'cleanser',
	toner: 'toner',
	essence: 'essence',
	serum: 'serum',
	moisturizer: 'moisturizer',
	sunscreen: 'sunscreen',
};

export const PRODUCT_ATTRIBUTES = {
	name: 'name',
	category: 'category',
	price: 'price',
};

export const MODAL_MODES = {
	create: 'create',
	update: 'update',
	delete: 'delete',
};
