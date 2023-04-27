const { readUserModel } = require("../models/readUser.model")

const readUserController = async (_req, res) => {
  try {
    const getUsers = await readUserModel();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  readUserController,
}