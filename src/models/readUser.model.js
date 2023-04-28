const path = require('path');
const fs = require('fs/promises');

const PATH_FILE = "../../users.json";

const readUserModel = async () => {
  const filePath = path.join(__dirname, PATH_FILE);
  const data = JSON.parse(await fs.readFile(filePath));
  return data;
};

const readUserByIdModel = async (id) => {
  const filePath = path.join(__dirname, PATH_FILE);
  const data = JSON.parse(await fs.readFile(filePath));
  const getObjectUser = data.find((user) => user.id === Number(id));
  return getObjectUser;
};

module.exports = {
  readUserModel,
  readUserByIdModel,
};