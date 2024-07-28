"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getAllProducts = void 0;
const productGateway_1 = require("Gateways/productGateway");
const constants_1 = require("Utils/constants");
const getAllProducts = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productGateway_1.productGateway.getAllProducts();
        console.log('Fetched all products', products);
        response.status(constants_1.STATUS.OK).json(products);
    }
    catch (error) {
        console.error('Failed to fetch all products', error);
        response.status(constants_1.STATUS.INTERNAL_SERVER_ERROR);
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        const product = yield productGateway_1.productGateway.getProductById(id);
        console.log('Fetched product', product);
        response.status(constants_1.STATUS.OK).json(product);
    }
    catch (error) {
        console.error(`Failed to fetch product ID ${id}`, error);
        response.status(constants_1.STATUS.INTERNAL_SERVER_ERROR);
    }
});
exports.getProduct = getProduct;
const createProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = request.body;
        yield productGateway_1.productGateway.createProduct(product);
        console.log('Product created', product);
        response.status(constants_1.STATUS.CREATED).json(product);
    }
    catch (error) {
        console.error('Failed to create product', error);
        response.status(constants_1.STATUS.INTERNAL_SERVER_ERROR);
    }
});
exports.createProduct = createProduct;
const updateProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const product = request.body;
    const productId = product.id;
    try {
        yield productGateway_1.productGateway.updateProduct(product);
        console.log(`Product ID ${productId} updated`, product);
        response.status(constants_1.STATUS.CREATED).json(product);
    }
    catch (error) {
        console.error(`Failed to update product ID ${productId}`, error);
        response.status(constants_1.STATUS.INTERNAL_SERVER_ERROR);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        yield productGateway_1.productGateway.deleteProduct(id);
        console.log(`Product ID ${id} deleted`, id);
        response.status(constants_1.STATUS.NO_CONTENT).send(id);
    }
    catch (error) {
        console.log(`Failed to delete product ID ${id}`, error);
        response.status(constants_1.STATUS.INTERNAL_SERVER_ERROR);
    }
});
exports.deleteProduct = deleteProduct;
