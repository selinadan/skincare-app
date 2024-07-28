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
exports.runQuery = runQuery;
exports.allQuery = allQuery;
exports.getQuery = getQuery;
const sqlite3_1 = require("sqlite3");
const fs_1 = __importDefault(require("fs"));
const const_1 = require("Utils/const");
const errorUtils_1 = require("Utils/errorUtils");
// const dbPath = path.resolve(__dirname, DATABASE_PATH);
if (!fs_1.default.existsSync(const_1.DATABASE_PATH)) {
    console.error('Database file does not exist:', const_1.DATABASE_PATH);
}
const db = new sqlite3_1.Database(const_1.DATABASE_PATH, sqlite3_1.OPEN_READWRITE);
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
function runQuery(sql_1) {
    return __awaiter(this, arguments, void 0, function* (sql, params = []) {
        try {
            const result = yield runAsync(sql, params);
            return { lastID: result.lastID, changes: result.changes };
        }
        catch (error) {
            (0, errorUtils_1.handleError)(error);
        }
    });
}
function allQuery(sql_1) {
    return __awaiter(this, arguments, void 0, function* (sql, params = []) {
        try {
            return yield allAsync(sql, params);
        }
        catch (error) {
            (0, errorUtils_1.handleError)(error);
        }
    });
}
function getQuery(sql_1) {
    return __awaiter(this, arguments, void 0, function* (sql, params = []) {
        try {
            return yield getAsync(sql, params);
        }
        catch (error) {
            (0, errorUtils_1.handleError)(error);
        }
    });
}
