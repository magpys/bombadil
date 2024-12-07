import * as SQLite from "expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite";

let db: SQLiteDatabase;

db = SQLite.openDatabaseSync("quotes_db");

export async function initialiseDatabase() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY NOT NULL, quote TEXT, author TEXT);
    `);
}

export default db;
