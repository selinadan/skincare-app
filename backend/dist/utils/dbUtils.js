var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function runQuery(sql_1) {
    return __awaiter(this, arguments, void 0, function* (sql, params = []) {
        try {
            const result = yield runAsync(sql, params);
            return { lastID: result.lastID, changes: result.changes };
        }
        catch (error) {
            handleError(error);
        }
    });
}
export function allQuery(sql_1) {
    return __awaiter(this, arguments, void 0, function* (sql, params = []) {
        try {
            return yield allAsync(sql, params);
        }
        catch (error) {
            handleError(error);
        }
    });
}
export function getQuery(sql_1) {
    return __awaiter(this, arguments, void 0, function* (sql, params = []) {
        try {
            return yield getAsync(sql, params);
        }
        catch (error) {
            handleError(error);
        }
    });
}
