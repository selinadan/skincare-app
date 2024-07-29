var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { DATABASE_PATH } from 'Utils/constants';
import { runQuery, allQuery, getQuery } from 'Utils/dbUtils';
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
            this.db = yield open({
                filename: DATABASE_PATH,
                driver: sqlite3.Database,
            });
            yield this.db.exec(sql);
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT id, name, price, category FROM products`;
            return allQuery(sql);
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT ${this.allColumns} FROM products WHERE id = ?`;
            return getQuery(sql, [id]);
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `INSERT INTO products (${this.allColumns}) VALUES (?, ?, ?, ?)`;
            const result = yield runQuery(sql, [
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
            yield runQuery(sql, [
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
            yield runQuery(sql, [id]);
        });
    }
}
export const productGateway = new ProductGateway();
