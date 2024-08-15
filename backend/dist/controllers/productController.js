import { productGateway } from 'Gateways/productGateway';
import { STATUS } from 'Utils/constants';
import { logger } from 'Utils/logger';
import { broadcast } from '../websocket';
export const getAllProducts = async (_request, response) => {
    try {
        const products = await productGateway.getAllProducts();
        broadcast({ type: 'DB_UPDATED', payload: { products } });
        logger.info('Fetched all products');
        response.sendStatus(STATUS.OK);
    }
    catch (error) {
        logger.error('Failed to fetch all products', error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
};
export const getProduct = async (request, response) => {
    const id = request.body;
    try {
        const product = await productGateway.getProductById(id);
        logger.info(`Fetched product ID ${product.id}`);
        response.status(STATUS.OK).json(product);
    }
    catch (error) {
        console.error(`Failed to fetch product ID ${id}`, error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
};
export const createProduct = async (request, response) => {
    try {
        const product = request.body;
        await productGateway.createProduct(product);
        logger.info('Product created');
        response.status(STATUS.CREATED).json(product);
    }
    catch (error) {
        logger.error('Failed to create product', error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
};
export const updateProduct = async (request, response) => {
    const product = request.body;
    const productId = product.id;
    try {
        await productGateway.updateProduct(product);
        logger.info(`Product ID ${productId} updated`);
        response.status(STATUS.CREATED).json(product);
    }
    catch (error) {
        logger.error(`Failed to update product ID ${productId}`, error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
};
export const deleteProduct = async (request, response) => {
    const id = parseInt(request.query.id);
    try {
        await productGateway.deleteProduct(id);
        logger.info(`Product ID ${id} deleted`);
        response.sendStatus(STATUS.OK);
    }
    catch (error) {
        logger.error(`Failed to delete product ID ${id}`, error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
};
