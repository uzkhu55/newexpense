import { sql } from "../../database/index.js";

export const addExpense = async (req, res) => {
  const { userId } = res.locals;
  const { amount, category } = req.body;

  const [user] = await sql`SELECT * FROM users WHERE userid = ${userId}`;

  await sql`UPDATE users SET expense = ${amount}, category = ${category} WHERE userid = ${userId}`;

  return res.status(200).send("success");
};
