import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

import { DATABASE_PATH } from 'Utils/const';
import { runQuery, allQuery, getQuery } from 'Utils/dbUtils';
import { Product } from 'Models/productModel';

class ProductGateway {
	private db!: Database<sqlite3.Database, sqlite3.Statement>;
	allColumns = 'id, name, price, category';

	constructor() {
		this.init();
	}

	private async init() {
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

	async getAllProducts(): Promise<Product[]> {
		const sql = `SELECT id, name, price, category FROM products`;

		return allQuery(sql);
	}

	async getProductById(id: number): Promise<Product | undefined> {
		const sql = `SELECT ${this.allColumns} FROM products WHERE id = ?`;

		return getQuery(sql, [id]);
	}

	async createProduct(product: Product): Promise<Product> {
		const sql = `INSERT INTO products (${this.allColumns}) VALUES (?, ?, ?, ?)`;
		const result = await runQuery(sql, [
			product.id,
			product.name,
			product.price,
			product.category,
		]);

		return { ...product, id: result.lastID as number };
	}

	async updateProduct(product: Product): Promise<void> {
		const sql = `UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?`;

		await runQuery(sql, [
			product.name,
			product.price,
			product.category,
			product.id,
		]);
	}

	async deleteProduct(id: number): Promise<void> {
		const sql = `DELETE FROM products WHERE id = ?`;

		await runQuery(sql, [id]);
	}
}

export const productGateway = new ProductGateway();
