import query from "../db/index.js";

export async function getAllExpenses() {
  const res = await query(`SELECT * FROM expenses;`);
  return res.rows;
}

export async function createExpenses(newExpense) {
  const { concept, amount, date, type } = newExpense;
  const res = await query(
    `INSERT INTO expenses (concept, amount, date, type) VALUES ($1, $2, $3, $4) RETURNING *`,
    [concept, amount, date, type]
  );
  return res.rows;
}

export async function updateExpenseById(id, update) {
  const { concept, amount, date } = update;
  const res = await query(
    `UPDATE expenses SET concept=$1 , amount=$2, date=$3 WHERE id = ${id} RETURNING *`,
    [concept, amount, date]
  );
  return res.rows;
}

export async function deleteExpenseByID(id) {
  const res = await query(`DELETE FROM expenses WHERE id =$1 RETURNING *`, [id]);
  return res;
}
