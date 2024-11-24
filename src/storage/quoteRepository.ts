import db from "@/src/storage/database";

export interface Quote {
    id: number;
    quote: string;
    author: string;
}

export async function getAllQuotes(): Promise<Quote[]> {
    return await db.getAllAsync('SELECT * FROM quotes') as Quote[];
}

export async function addNewQuote(quote: string, author?: string): Promise<void> {
    await db.runAsync('INSERT INTO quotes (quote, author) VALUES (?, ?);', quote, author ?? '');
}