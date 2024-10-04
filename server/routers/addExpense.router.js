import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.js";
import { addExpense } from "../controllers/body/addExpense.js";

const addExpenseRouter = Router();
addExpenseRouter.post("/user/addexpense", authMiddleware, addExpense);

export default addExpenseRouter;
