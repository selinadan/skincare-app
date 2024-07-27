"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("Routes/productRoutes"));
const const_1 = require("Utils/const");
const express_2 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_2.default();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Routes
const router = express_1.Router();
app.use(const_1.PATHS.api, router);
router.use(const_1.PATHS.products, productRoutes_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
