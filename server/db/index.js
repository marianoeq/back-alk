import pg from "pg";

const pool = new pg.Pool({
  host: config.DATABASE_HOST,
  database: config.DATABASE_NAME,
  user: config.USERNAME,
  port: config.DB_PORT,
  password: config.PASSWORD,
  connectionString: process.env.URI || 'postgres://khmsqfsvqhettd:2986b46c0e6335adfa08e50ec919429c85285df2e39a65fa0dcd8c03403f2684@ec2-54-77-40-202.eu-west-1.compute.amazonaws.com:5432/dbl6mu92l0r0sm',
  ssl: process.env.DATABASE_URL ? true : false,
  ssl: {
      rejectUnauthorized: false,
  }
});

export default function query(text, params) {
  return pool.query(text, params);
}
