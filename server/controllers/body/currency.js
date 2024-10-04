import { sql } from "../../database/index.js";

export const CurrencyShow = async (req, res) => {
  const { userId } = res.locals;

  const showCurrency = await sql`SELECT * FROM users WHERE userId=${userId}`;

  res.json({ currency: showCurrency[0].currency });
};
