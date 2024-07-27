import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = open({
  filename: './my-database.db',
  driver: sqlite3.Database
});

async function setup() {
	const database = await db;

	await database.exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL
		)
	`);
}

setup();

export default db;
