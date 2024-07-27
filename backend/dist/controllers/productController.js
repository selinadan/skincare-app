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
const getAllProducts = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productGateway_1.productGateway.getAllProducts();
        response.status(201).json(products);
    }
    catch (error) {
        response.status(500).send('Failed to fetch all products');
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        const product = yield productGateway_1.productGateway.getProductById(id);
        response.status(201).json(product);
    }
    catch (error) {
        response.status(500).send(`Failed to fetch product ID ${id}`);
    }
});
exports.getProduct = getProduct;
const createProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productGateway_1.productGateway.createProduct(request.body);
        response.status(201).send('Product created');
    }
    catch (error) {
        response.status(500).send('Failed to create product');
    }
});
exports.createProduct = createProduct;
const updateProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        yield productGateway_1.productGateway.updateProduct(request.body);
        response.status(201).send(`Product ID ${id} updated`);
    }
    catch (error) {
        response.status(500).send(`Failed to update product ID ${id}`);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.body;
    try {
        yield productGateway_1.productGateway.deleteProduct(id);
        response.status(201).send(`Product ID ${id} deleted`);
    }
    catch (error) {
        response.status(500).send(`Failed to delete product ID ${id}`);
    }
});
exports.deleteProduct = deleteProduct;
