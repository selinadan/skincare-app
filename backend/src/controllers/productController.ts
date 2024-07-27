import { Request, Response } from 'express';

import { productGateway } from 'Gateways/productGateway';

export const getAllProducts = async (
	_request: Request,
	response: Response
): Promise<void> => {
	try {
		const products = await productGateway.getAllProducts();
		response.status(201).json(products);
	} catch (error) {
		response.status(500).send('Failed to fetch all products');
	}
};

export const getProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		const product = await productGateway.getProductById(id);
		response.status(201).json(product);
	} catch (error) {
		response.status(500).send(`Failed to fetch product ID ${id}`);
	}
};

export const createProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	try {
		await productGateway.createProduct(request.body);
		response.status(201).send('Product created');
	} catch (error) {
		response.status(500).send('Failed to create product');
	}
};

export const updateProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		await productGateway.updateProduct(request.body);
		response.status(201).send(`Product ID ${id} updated`);
	} catch (error) {
		response.status(500).send(`Failed to update product ID ${id}`);
	}
};

export const deleteProduct = async (
	request: Request,
	response: Response
): Promise<void> => {
	const id = request.body;

	try {
		await productGateway.deleteProduct(id);
		response.status(201).send(`Product ID ${id} deleted`);
	} catch (error) {
		response.status(500).send(`Failed to delete product ID ${id}`);
	}
};
