import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";


import expenseRouter from "./routes/expenses.js";

const app = express();

// view engine setup
app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/expense", expenseRouter);

export default app;
