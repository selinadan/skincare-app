"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("Controllers/productController");
const const_1 = require("Utils/const");
const router = (0, express_1.Router)();
//GET
router.get(const_1.PATHS.root, productController_1.getAllProducts);
router.get(const_1.PATHS.rootId, productController_1.getProduct);
// POST
router.post(const_1.PATHS.root, productController_1.createProduct);
// PUT
router.patch(const_1.PATHS.rootId, productController_1.updateProduct);
// DELETE
router.delete(const_1.PATHS.rootId, productController_1.deleteProduct);
exports.default = router;
