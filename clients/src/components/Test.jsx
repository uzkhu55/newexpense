import { Router } from "express";
import { signinController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";
import { authMiddleware } from "../middlewares/auth.js";
import { getUsersInfo } from "../controllers/allUsers.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signinController);
userRouter.route("/user/login").post(loginController);

userRouter.get("/user", authMiddleware, getUsersInfo);

export default userRouter;
