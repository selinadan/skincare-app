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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productGateway = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const const_1 = require("Utils/const");
const dbUtils_1 = require("Utils/dbUtils");
class ProductGateway {
    constructor() {
        this.allColumns = 'id, name, price, category';
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
			CREATE TABLE IF NOT EXISTS products (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL,
				price REAL NOT NULL,
				category TEXT NOT NULL
			)
		`;
            this.db = yield (0, sqlite_1.open)({
                filename: const_1.DATABASE_PATH,
                driver: sqlite3_1.default.Database,
            });
            yield this.db.exec(sql);
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT id, name, price, category FROM products`;
            return (0, dbUtils_1.allQuery)(sql);
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT ${this.allColumns} FROM products WHERE id = ?`;
            return (0, dbUtils_1.getQuery)(sql, [id]);
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `INSERT INTO products (${this.allColumns}) VALUES (?, ?, ?, ?)`;
            const result = yield (0, dbUtils_1.runQuery)(sql, [
                product.id,
                product.name,
                product.price,
                product.category,
            ]);
            return Object.assign(Object.assign({}, product), { id: result.lastID });
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?`;
            yield (0, dbUtils_1.runQuery)(sql, [
                product.name,
                product.price,
                product.category,
                product.id,
            ]);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `DELETE FROM products WHERE id = ?`;
            yield (0, dbUtils_1.runQuery)(sql, [id]);
        });
    }
}
exports.productGateway = new ProductGateway();
