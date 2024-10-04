import { sql } from "../../database/index.js";

export const Cash = async (req, res) => {
  const { balance } = req.body;
  const { userId } = res.locals;

  const checkCash = await sql`SELECT * FROM users WHERE userId=${userId}`;

  if (checkCash.length) {
    await sql`UPDATE users SET balance=${balance} where userId=${userId}`;
    res.status(200).send("success");
    return;
  }
  res.status(400).send("alda");
};
