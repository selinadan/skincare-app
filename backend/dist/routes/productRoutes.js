"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("Controllers/productController");
const constants_1 = require("Utils/constants");
const router = (0, express_1.Router)();
//GET
router.get(constants_1.PATHS.root, productController_1.getAllProducts);
router.get(constants_1.PATHS.rootId, productController_1.getProduct);
// POST
router.post(constants_1.PATHS.root, productController_1.createProduct);
// PATCH
router.patch(constants_1.PATHS.rootId, productController_1.updateProduct);
// DELETE
router.delete(constants_1.PATHS.rootId, productController_1.deleteProduct);
exports.default = router;
