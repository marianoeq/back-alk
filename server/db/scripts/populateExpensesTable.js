import query from "../index.js";
import expenses from "../../expenses-data.js";


async function populateExpensesTable() {
  for (let i = 0; i < expenses.length; i++) {
    const { concept, amount, date, type } = expenses[i];
    const res = await query(
      `INSERT INTO expenses (concept,amount,date,type) VALUES ($1,$2,$3,$4) RETURNING *`,
      [concept, amount, date, type]
    );
    console.log("Table populated", res.rows);
  }
}

populateExpensesTable();
