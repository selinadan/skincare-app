import { Database, OPEN_READWRITE } from 'sqlite3';
import path from 'path';

import { DATABASE_PATH } from 'Utils/const';
import { handleError } from 'Utils/errorUtils';

interface RunResult {
	changes: number;
	lastID: number;
}

const dbPath = path.resolve(__dirname, DATABASE_PATH);
const db = new Database(dbPath, OPEN_READWRITE);

function runAsync(sql: string, params: any[] = []): Promise<RunResult> {
	return new Promise((resolve, reject) => {
		db.run(sql, params, function (error) {
			error
				? reject(error)
				: resolve({
						changes: this.changes,
						lastID: this.lastID,
					});
		});
	});
}

function allAsync<T>(sql: string, params: any[] = []): Promise<T[]> {
	return new Promise((resolve, reject) =>
		db.all(sql, params, (error, rows) =>
			error ? reject(error) : resolve(rows as T[])
		)
	);
}

function getAsync<T>(sql: string, params: any[] = []): Promise<T | undefined> {
	return new Promise((resolve, reject) =>
		db.get(sql, params, (error, row) =>
			error ? reject(error) : resolve(row as T | undefined)
		)
	);
}

export async function runQuery(
	sql: string,
	params: any[] = []
): Promise<{ lastID: number; changes: number }> {
	try {
		const result = await runAsync(sql, params);
		return { lastID: result.lastID, changes: result.changes };
	} catch (error) {
		handleError(error);
	}
}

export async function allQuery<T>(
	sql: string,
	params: any[] = []
): Promise<T[]> {
	try {
		return await allAsync<T>(sql, params);
	} catch (error) {
		handleError(error);
	}
}

export async function getQuery<T>(
	sql: string,
	params: any[] = []
): Promise<T | undefined> {
	try {
		return await getAsync(sql, params);
	} catch (error) {
		handleError(error);
	}
}