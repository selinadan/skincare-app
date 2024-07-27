import axios from 'axios';

import { API_BASE_URL, API_PRODUCTS } from 'Utils/const';
import { Product } from 'Utils/types';

const URL = `${API_BASE_URL}/${API_PRODUCTS}`;

export const getAllProducts = async () => {
	try {
		const response = await axios.get(URL);
		return response.data;
	} catch (error) {
		console.error('Error fetching products', error);
		throw error;
	}
};

export const getProduct = async (id: number) => {
	try {
		const response = await axios.get(`${URL}/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching product ID ${id}`, error);
		throw error;
	}
};

export const createProduct = async (product: Product) => {
	try {
		const response = await axios.post(URL, product);
		return response.data;
	} catch (error) {
		console.error(`Error creating product`, error);
		throw error;
	}
};

export const updateProduct = async (product: Product) => {
	try {
		const response = await axios.patch(URL, product);
		return response.data;
	} catch (error) {
		console.error(`Error updating product ID ${product.id}`, error);
		throw error;
	}
};

export const deleteProduct = async (id: number) => {
	try {
		const response = await axios.delete(URL, id);
		return response.data;
	} catch (error) {
		console.error(`Error deleting product ID ${id}`, error);
		throw error;
	}
};
