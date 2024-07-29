"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRoutes_1 = __importDefault(require("Routes/productRoutes"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("Utils/constants");
const logger_1 = require("Utils/logger");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(logger_1.morganFormat);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// CORS
app.use((0, cors_1.default)({
    origin: constants_1.FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
// Routes
app.use(constants_1.PATHS.products, productRoutes_1.default);
app.use((_request, response) => {
    response.status(constants_1.STATUS.NOT_FOUND).json({ message: 'Route not found' });
});
app.use((request, _response, next) => {
    console.log(`Request received: ${request.method} ${request.url}`);
    next();
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
