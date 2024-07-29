import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { DATABASE_PATH } from 'Utils/constants';
import { runQuery, allQuery, getQuery } from 'Utils/dbUtils';
class ProductGateway {
    db;
    allColumns = 'id, name, price, category';
    constructor() {
        this.init();
    }
    async init() {
        const sql = `
			CREATE TABLE IF NOT EXISTS products (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL,
				price REAL NOT NULL,
				category TEXT NOT NULL
			)
		`;
        this.db = await open({
            filename: DATABASE_PATH,
            driver: sqlite3.Database,
        });
        await this.db.exec(sql);
    }
    async getAllProducts() {
        const sql = `SELECT id, name, price, category FROM products`;
        return allQuery(sql);
    }
    async getProductById(id) {
        const sql = `SELECT ${this.allColumns} FROM products WHERE id = ?`;
        return getQuery(sql, [id]);
    }
    async createProduct(product) {
        const sql = `INSERT INTO products (${this.allColumns}) VALUES (?, ?, ?, ?)`;
        const result = await runQuery(sql, [
            product.id,
            product.name,
            product.price,
            product.category,
        ]);
        return { ...product, id: result.lastID };
    }
    async updateProduct(product) {
        const sql = `UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?`;
        await runQuery(sql, [
            product.name,
            product.price,
            product.category,
            product.id,
        ]);
    }
    async deleteProduct(id) {
        const sql = `DELETE FROM products WHERE id = ?`;
        await runQuery(sql, [id]);
    }
}
export const productGateway = new ProductGateway();
