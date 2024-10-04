export const Transaction = async (req, res) => {
  const result = ({ userId } = res.locals);

  const filterResult = result.users.find((el) => el.userId === userId);
  if (filterResult) {
    res.status(200).send("Transaction Success");

    return;
  }
};
