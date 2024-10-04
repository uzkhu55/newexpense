import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";

import { getExpense } from "../controllers/body/getExpense.js";

const getExpenseRouter = Router();

getExpenseRouter.get("/getexpense", authMiddleware, getExpense);

export default getExpenseRouter;
