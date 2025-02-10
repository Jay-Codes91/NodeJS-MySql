import dotenv from 'dotenv';

dotenv.config();

export const puerto = process.env.PORT || 3000;
export const db_host = process.env.DB_HOST;
export const db_port = process.env.DB_PORT;
export const db_user = process.env.DB_USER;
export const db_pass = process.env.DB_PASSWORD;
export const db = process.env.DATEBASE;