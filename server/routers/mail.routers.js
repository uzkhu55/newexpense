import { Router } from "express";
import { Cash } from "../controllers/cash/cash.js";
import { authMiddleware } from "../middlewares/auth.js";

const mailRouter = Router();
mailRouter.post("/user/mail", authMiddleware, Cash);

export default mailRouter;
