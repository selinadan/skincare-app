var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { productGateway } from 'Gateways/productGateway';
import { STATUS } from 'Utils/constants';
import { logger } from 'Utils/logger';
export const getAllProducts = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productGateway.getAllProducts();
        logger.info('Fetched all products:', products);
        response.status(STATUS.OK).json(products);
    }
    catch (error) {
        logger.error('Failed to fetch all products', error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
});
export const getProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        const product = yield productGateway.getProductById(id);
        logger.info('Fetched product', product);
        response.status(STATUS.OK).json(product);
    }
    catch (error) {
        console.error(`Failed to fetch product ID ${id}`, error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
});
export const createProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = request.body;
        yield productGateway.createProduct(product);
        logger.info('Product created', product);
        response.status(STATUS.CREATED).json(product);
    }
    catch (error) {
        logger.error('Failed to create product', error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
});
export const updateProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const product = request.body;
    const productId = product.id;
    try {
        yield productGateway.updateProduct(product);
        logger.info(`Product ID ${productId} updated`, product);
        response.status(STATUS.CREATED).json(product);
    }
    catch (error) {
        logger.error(`Failed to update product ID ${productId}`, error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
});
export const deleteProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        yield productGateway.deleteProduct(id);
        logger.info(`Product ID ${id} deleted`, id);
        response.status(STATUS.NO_CONTENT).send(id);
    }
    catch (error) {
        logger.error(`Failed to delete product ID ${id}`, error);
        response.status(STATUS.INTERNAL_SERVER_ERROR);
    }
});
