import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { CurrencyShow } from "../controllers/body/currency.js";

const cuurencyShow = Router();

cuurencyShow.get("/currency", authMiddleware, CurrencyShow);

export default cuurencyShow;
