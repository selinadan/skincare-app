import { Request, Response } from 'express';

import { productGateway } from 'Gateways/productGateway';
import { STATUS } from 'Utils/constants';
import { logger } from 'Utils/logger';

export const getAllProducts = async (
	_request: Request,
	response: Response
): Promise<void> => {
	try {
		const products = await productGateway.getAllProducts();
		logger.info('Fetched all products:', products);
		response.status(STATUS.OK).json(products);
	} catch (error) {
		logger.error('Failed to fetch all products', error);
		response.status(STATUS.INTERNAL_SERVER_ERROR);
	}
};

export const getProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		const product = await productGateway.getProductById(id);
		logger.info('Fetched product', product);
		response.status(STATUS.OK).json(product);
	} catch (error) {
		console.error(`Failed to fetch product ID ${id}`, error);
		response.status(STATUS.INTERNAL_SERVER_ERROR);
	}
};

export const createProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	try {
		const product = request.body;
		await productGateway.createProduct(product);
		logger.info('Product created', product);
		response.status(STATUS.CREATED).json(product);
	} catch (error) {
		logger.error('Failed to create product', error);
		response.status(STATUS.INTERNAL_SERVER_ERROR);
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
		logger.info(`Product ID ${productId} updated`, product);
		response.status(STATUS.CREATED).json(product);
	} catch (error) {
		logger.error(`Failed to update product ID ${productId}`, error);
		response.status(STATUS.INTERNAL_SERVER_ERROR);
	}
};

export const deleteProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		await productGateway.deleteProduct(id);
		logger.info(`Product ID ${id} deleted`, id);
		response.status(STATUS.NO_CONTENT).send(id);
	} catch (error) {
		logger.error(`Failed to delete product ID ${id}`, error);
		response.status(STATUS.INTERNAL_SERVER_ERROR);
	}
};
