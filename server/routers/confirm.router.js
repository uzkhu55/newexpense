import { Router } from "express";
import { Confirm } from "../controllers/confirm/confirm.js";
import { authMiddleware } from "../middlewares/auth.js";

const confirmRouter = Router();
confirmRouter.post("/user/confirm", authMiddleware, Confirm);

export default confirmRouter;
