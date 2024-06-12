import {  createPool } from "mysql2";
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
} from './config.js'

export const pool =  createPool({

    user:DB_USER,
    host:DB_HOST,
    password:DB_PASSWORD,
    port:DB_PORT,
    database: DB_NAME


});