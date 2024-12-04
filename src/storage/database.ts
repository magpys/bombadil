import * as SQLite from "expo-sqlite";
import {SQLiteDatabase} from "expo-sqlite";

let db: SQLiteDatabase;

db = SQLite.openDatabaseSync("quotes_db");

export async function initialiseDatabase() {
    console.log("Seeding database...");
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY NOT NULL, quote TEXT, author TEXT);
    DELETE FROM quotes;
    INSERT INTO quotes (quote, author) VALUES ('Here is how to live: laugh', 'How to Live - Derek Sivers');
INSERT INTO quotes (quote, author) VALUES ('A no is a no to one thing - a yes is a no to hundreds of things', 'It does not have to be crazy at work');
    `);
    console.log("Database seeded successfully");
}

export default db;