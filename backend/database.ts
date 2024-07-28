import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

import { DATABASE_PATH } from './src/utils/const';

const db = open({
	filename: DATABASE_PATH,
	driver: sqlite3.Database,
});

export default db;
