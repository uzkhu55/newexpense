import { sql } from "../../database/index.js";

export const getExpense = async (req, res) => {
  const { userId } = res.locals;
  const result = ""; // await sql`SELECT expense, category FROM users WHERE userId = ${userId}`;
  if (result.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  const [{ expense, category }] = result;
  res.json({
    expense,
    category,
  });
};
