const { Router } = require('express');
const { insertUserController } = require('../controllers/insertUser.controller');
const { readUserController, readUserByIdController } = require('../controllers/readUser.controller');
const { deleteUserByIdController } = require('../controllers/deleteUser.controller');

const userRouter = Router();

userRouter.post("/insert/user", insertUserController);
userRouter.get("/users", readUserController);
userRouter.get("/users/:id", readUserByIdController);
userRouter.put("/users/:id", deleteUserByIdController);

module.exports = {
  userRouter,
}