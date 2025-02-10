import {createPool} from 'mysql2/promise';
import { db_host, db_port, db_user, db_pass, db } from "../config.js";

export const pool = createPool(
    {
        host: db_host,
        user: db_user,
        port: db_port,
        password: db_pass,
        database: db
    }
)
