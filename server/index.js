import cors from "cors";
import env from "dotenv";
import express from "express";
import userRouter from "./routers/user.router.js";
import categoryRouter from "./routers/category.router.js";
import transactionRouter from "./routers/transaction.router.js";
import confirmRouter from "./routers/confirm.router.js";
import mailRouter from "./routers/mail.routers.js";
import balanceRouter from "./routers/balance.router.js";
import testRouter from "./routers/testRouter.js";
import cuurencyShow from "./routers/showCurrency.js";
import addExpenseRouter from "./routers/addExpense.router.js";
import getExpenseRouter from "./routers/getExpense.js";

env.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", transactionRouter);
app.use("/api", balanceRouter);
app.use("/api", confirmRouter);
app.use("/api", mailRouter);
app.use("/api", testRouter);
app.use("/api", cuurencyShow);
app.use("/api", addExpenseRouter);
app.use("/api", getExpenseRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
