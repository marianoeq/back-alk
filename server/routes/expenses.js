import express from "express";
const router = express.Router();

import { getAllExpenses,createExpenses, updateExpenseById, deleteExpenseByID } from "../models/index.js";
/* GET all expenses. */
router.get("/expense", async (req, res) => {
  const allExpenses = await getAllExpenses();
  res.json({
    message: "Returning all expenses",
    success: true,
    payload: allExpenses,
  });
});


/*create expense*/

router.post("/expense", async (req, res) => {
  const createExpense = await createExpenses(req.body);
  res.json({
    message: "Expense created",
    success: true,
    payload: createExpense
  })
});

/* Update expense by ID */

router.put("/expense/:id", async (req, res) => {
  const id = req.params.id;
  const updateExpense = updateExpenseById(id, req.body);
  res.json({
    message: "Expense updated",
    success: true,
    payload: updateExpense
  })
})


/*Delete expense by id */
router.delete("/expense/:id", async(req, res) => {
  const id = req.params.id;
  const deleteExpenseId = await deleteExpenseByID(id) ;
  res.json({
    message:"Expenses deleted successfully",
    success: true,
    payload: deleteExpenseId,
  })
})

export default router;
