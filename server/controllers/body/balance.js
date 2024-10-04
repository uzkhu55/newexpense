import { sql } from "../../database/index.js";

export const Balance = async (req, res) => {
  const { userId } = res.locals;

  const showBalance = await sql`SELECT * FROM users WHERE userId=${userId}`;

  res.json({ balance: showBalance[0].balance });
};
