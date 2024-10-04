import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { Balance } from "../controllers/body/Balance.js";

const balanceRouter = Router();

balanceRouter.get("/balance", authMiddleware, Balance);

export default balanceRouter;
