const path = require('path');
const fs = require('fs/promises');

const PATH_FILE = "../../users.json";

const deleteUserByIdModel = async (id) => {
  const filePath = path.join(__dirname, PATH_FILE);
  const data = JSON.parse(await fs.readFile(filePath));
  const getObjectUser = data.filter((user) => user.id !== Number(id));
  await fs.writeFile(filePath, JSON.stringify(getObjectUser));
  return getObjectUser;
};

module.exports = {
  deleteUserByIdModel
};
