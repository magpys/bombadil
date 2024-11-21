import * as SQLite from "expo-sqlite";
import {SQLiteDatabase} from "expo-sqlite";

let db: SQLiteDatabase;

export async function initialiseDatabase() {
    db = await SQLite.openDatabaseAsync("quotes_db");
    await db.execAsync('CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY NOT NULL, quote TEXT, author TEXT);');
}

export default db;