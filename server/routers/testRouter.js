import { Router } from "express";

import { testController } from "../controllers/test.js";

const testRouter = Router();

testRouter.post("/test", testController);

export default testRouter;
