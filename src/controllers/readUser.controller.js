const { readUserModel, readUserByIdModel } = require("../models/readUser.model")

const readUserController = async (_req, res) => {
  try {
    const getUsers = await readUserModel();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readUserByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const getUsers = await readUserByIdModel(id);
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  readUserController,
  readUserByIdController,
}