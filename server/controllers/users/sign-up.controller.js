import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { sql } from "../../database/index.js";

export const signinController = async (req, res) => {
  const { email, username, password } = req.body;

  const existingUser = await sql`SELECT * FROM users WHERE email=${email}`;

  if (existingUser.length) {
    res.status(400).send("User exists");
  }

  const userId = uuid();

  const hashedPassword = bcrypt.hashSync(password, 1);

  await sql`INSERT INTO users(userid, username, email, password, createdat) VALUES(${userId}, ${username}, ${email}, ${hashedPassword},${new Date()})`;

  res.status(200).send("Success");
};
