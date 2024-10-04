import { readFileSync } from "fs";
export const getUsersInfo = async (req, res) => {
  const { userId } = res.locals;

  const resultJSON = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJSON);

  res.send(userId);
};
