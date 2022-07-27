import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS 
expenses (id SERIAL PRIMARY KEY,
    concept VARCHAR NOT NULL,
    amount INT,
  date VARCHAR NOT NULL, 
    type VARCHAR NOT NULL)`;

async function createExpensesTable() {
  const res = await query(sqlString);
  console.log("created expenses table", res);
}

createExpensesTable();
