import { sql } from "../../database/index.js";

export const Confirm = async (req, res) => {
  const { currency } = req.body;
  const { userId } = res.locals;
  const checkCurrency = await sql`SELECT * FROM users WHERE userId=${userId}`;

  if (checkCurrency.length) {
    await sql`Update users SET currency=${currency} where userId=${userId}`;
    res.status(200).send("success");
    return;
  }

  res.status(400).send("alda");
};
