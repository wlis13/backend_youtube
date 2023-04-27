const { insertUserModel } = require("../models/insertUser.model");

const insertUserController = async (req, res) => {
  try {
    const newUser = await insertUserModel(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  insertUserController,
};
