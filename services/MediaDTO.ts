import { Database } from 'sqlite3';
import { IResponse } from '@/models/responses';

export async function  getFormats() : Promise<IResponse> {
    return new Promise((resolve, reject) => {
        const db = new Database('./database.db');
        db.all('SELECT DISTINCT type FROM media', (err, rows) => {
            resolve({
                success: err === null,
                data: rows,
                error: err,
            });
        });
    });
}
export async function  getFilesByFormat(format: string) : Promise<IResponse> {
    return new Promise((resolve, reject) => {
        const db = new Database('./database.db');
        db.all(`SELECT path FROM media WHERE type = '${format}'`, (err, rows) => {
            resolve({
                success: err === null,
                data: rows,
                error: err,
            });
        });
    });
}


export default {
    getFormats,
    getFilesByFormat
}