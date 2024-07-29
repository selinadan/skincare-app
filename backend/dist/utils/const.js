"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATHS = exports.BACKEND_URL = exports.FRONTEND_URL = exports.BASE_URL = exports.BACKEND_PORT = exports.FRONTEND_PORT = exports.DATABASE_PATH = void 0;
const path_1 = __importDefault(require("path"));
exports.DATABASE_PATH = path_1.default.resolve(process.cwd(), 'backend', 'database.sqlite');
exports.FRONTEND_PORT = 5173;
exports.BACKEND_PORT = 3000;
exports.BASE_URL = `http://localhost`;
exports.FRONTEND_URL = `${exports.BASE_URL}:${exports.FRONTEND_PORT}`;
exports.BACKEND_URL = `${exports.BASE_URL}:${exports.BACKEND_PORT}`;
exports.PATHS = {
    root: '/',
    rootId: '/:id',
    api: '/api',
    products: '/products',
};
