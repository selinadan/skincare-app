import { Request, Response } from 'express';

import { productGateway } from 'Gateways/productGateway';
import { STATUS } from 'Utils/constants';

export const getAllProducts = async (
	_request: Request,
	response: Response
): Promise<void> => {
	try {
		const products = await productGateway.getAllProducts();
		response.status(STATUS.OK).json(products);
	} catch (error) {
		response
			.status(STATUS.INTERNAL_SERVER_ERROR)
			.send('Failed to fetch all products');
	}
};

export const getProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		const product = await productGateway.getProductById(id);
		response.status(STATUS.OK).json(product);
	} catch (error) {
		console.error(`Failed to fetch product ID ${id}`, error);
		response.sendStatus(STATUS.INTERNAL_SERVER_ERROR);
	}
};

export const createProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	try {
		const product = request.body;
		await productGateway.createProduct(product);
		console.log('Product created', product);
		response.sendStatus(STATUS.CREATED);
	} catch (error) {
		console.error('Failed to create product', error);
		response.sendStatus(STATUS.INTERNAL_SERVER_ERROR);
	}
};

export const updateProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const product = request.body;
	const productId = product.id;

	try {
		await productGateway.updateProduct(product);
		console.log(`Product ID ${productId} updated`, product);
		response.sendStatus(STATUS.CREATED);
	} catch (error) {
		console.error(`Failed to update product ID ${productId}`, error);
		response.sendStatus(STATUS.INTERNAL_SERVER_ERROR);
	}
};

export const deleteProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		await productGateway.deleteProduct(id);
		console.log(`Product ID ${id} deleted`, id);
		response.sendStatus(STATUS.NO_CONTENT);
	} catch (error) {
		console.log(`Failed to delete product ID ${id}`, error);
		response.sendStatus(STATUS.INTERNAL_SERVER_ERROR);
	}
};
