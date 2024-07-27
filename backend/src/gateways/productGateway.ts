import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

import { DATABASE_PATH } from 'Utils/const';
import { Product } from 'Models/productModel';

class ProductGateway {
	private db!: Database<sqlite3.Database, sqlite3.Statement>;
	allColumns = 'id, name, price, category';

	constructor() {
		this.init();
	}

	private async init() {
		const query = `
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

		await this.db.exec(query);
	}

	async getAllProducts(): Promise<Product[]> {
		const query = `SELECT id, name, price, category FROM products`;

		return this.db.all(query);
	}

	async getProductById(id: number): Promise<Product | undefined> {
		const query = `SELECT ${this.allColumns} FROM products WHERE id = ?`;

		return this.db.get(query, [id]);
	}

	async createProduct(product: Product): Promise<Product> {
		const query = `INSERT INTO products (${this.allColumns}) VALUES (?, ?, ?, ?)`;
		const result = await this.db.run(query, [
			product.id,
			product.name,
			product.price,
			product.category,
		]);

		return { ...product, id: result.lastID as number };
	}

	async updateProduct(product: Product): Promise<void> {
		const query = `UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?`;

		await this.db.run(query, [
			product.name,
			product.price,
			product.category,
			product.id,
		]);
	}

	async deleteProduct(id: number): Promise<void> {
		const query = `DELETE FROM products WHERE id = ?`;

		await this.db.run(query, [id]);
	}
}

export const productGateway = new ProductGateway();
