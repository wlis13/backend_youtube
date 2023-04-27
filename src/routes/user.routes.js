const { Router } = require('express');
const { insertUserController } = require('../controllers/insertUser.controller');
const { readUserController } = require('../controllers/readUser.controller');

const userRouter = Router();

userRouter.post("/insert/user", insertUserController);
userRouter.get("/users", readUserController);

module.exports = {
  userRouter,
}