import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  host: config.DATABASE_HOST,
  database: config.DATABASE_NAME,
  user: config.USERNAME,
  port: config.DB_PORT,
  password: config.PASSWORD,           
  connectionString: process.env.URI,
  ssl: process.env.DATABASE_URL ? true : false,
  ssl: {
      rejectUnauthorized: false,
  }
});

export default function query(text, params) {
  return pool.query(text, params);
}
