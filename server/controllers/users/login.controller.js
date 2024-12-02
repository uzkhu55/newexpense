import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sql } from "../../database/index.js";

const SecretKey = "uzkhu";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await sql`SELECT * FROM users WHERE email=${email}`;

  if (!checkUser.length) {
    res.status(400).json({ message: "Бүртгэлгүй байна" });
    return;
  }

  const match = await bcrypt.compare(password, checkUser[0].password);
  if (!match) {
    res.status(400).json({ message: "Нууц үг таарахгүй байна" });
    return;
  }
  const token = jwt.sign(
    {
      userId: checkUser[0].userid,
      email: checkUser[0].email,
      username: checkUser[0].username,
      isAdmin: true,
    },
    process.env.SECRET,
    { expiresIn: "30d" }
  );
  res.status(200).json({ message: "Амжилттай нэвтэрлээ", token });
};
