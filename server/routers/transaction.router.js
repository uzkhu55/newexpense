import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { Transaction } from "../controllers/transaction/transaction.js";

const transactionRouter = Router();

transactionRouter.post("/user/transaction", authMiddleware, Transaction);

export default transactionRouter;
