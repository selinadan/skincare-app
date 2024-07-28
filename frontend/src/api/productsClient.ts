import { PATHS } from 'Utils/const';
import { Product } from 'Utils/types';
import { createApiClient } from './clientFactory';

const baseURL = `${PATHS.api}${PATHS.products}`;
const productApiClient = createApiClient({ baseURL: baseURL });

export const getAllProducts = async () => {
	try {
		const response = await productApiClient.getClient().get(PATHS.root);
		return response.data;
	} catch (error) {
		console.error('Error fetching products', error);
		throw error;
	}
};

export const getProduct = async (id: number) => {
	try {
		const path = `${PATHS.root}${id}`;
		const response = await productApiClient.getClient().get(path);

		return response.data;
	} catch (error) {
		console.error(`Error fetching product ID ${id}`, error);
		throw error;
	}
};

export const createProduct = async (product: Product) => {
	try {
		const response = await productApiClient.getClient().post(PATHS.root, product);
		return response.data;
	} catch (error) {
		console.error(`Error creating product`, error);
		throw error;
	}
};

export const updateProduct = async (product: Product) => {
	try {
		const response = await productApiClient.getClient().patch(PATHS.root, product);
		return response.data;
	} catch (error) {
		console.error(`Error updating product ID ${product.id}`, error);
		throw error;
	}
};

export const deleteProduct = async (id: number) => {
	try {
		const path = `${PATHS.root}${id}`;
		const response = await productApiClient.getClient().delete(path);

		return response.data;
	} catch (error) {
		console.error(`Error deleting product ID ${id}`, error);
		throw error;
	}
};
