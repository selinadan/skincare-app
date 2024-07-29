import { Database, OPEN_READWRITE } from 'sqlite3';
import fs from 'fs';
import { DATABASE_PATH } from 'Utils/constants';
import { handleError } from 'Utils/errorUtils';
if (!fs.existsSync(DATABASE_PATH)) {
    console.error('Database file does not exist:', DATABASE_PATH);
}
const db = new Database(DATABASE_PATH, OPEN_READWRITE);
function runAsync(sql, params = []) {
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
function allAsync(sql, params = []) {
    return new Promise((resolve, reject) => db.all(sql, params, (error, rows) => error ? reject(error) : resolve(rows)));
}
function getAsync(sql, params = []) {
    return new Promise((resolve, reject) => db.get(sql, params, (error, row) => error ? reject(error) : resolve(row)));
}
export async function runQuery(sql, params = []) {
    try {
        const result = await runAsync(sql, params);
        return { lastID: result.lastID, changes: result.changes };
    }
    catch (error) {
        handleError(error);
    }
}
export async function allQuery(sql, params = []) {
    try {
        return await allAsync(sql, params);
    }
    catch (error) {
        handleError(error);
    }
}
export async function getQuery(sql, params = []) {
    try {
        return await getAsync(sql, params);
    }
    catch (error) {
        handleError(error);
    }
}
