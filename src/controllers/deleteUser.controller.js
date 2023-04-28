const { deleteUserByIdModel } = require("../models/deleteUser.model");


const deleteUserByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const getUsers = await deleteUserByIdModel(id);
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  deleteUserByIdController
};
