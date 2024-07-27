"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const const_1 = require("Utils/const");
const router = (0, express_1.Router)();
router.use(const_1.PATHS.products, productRoutes_1.default);
exports.default = router;
