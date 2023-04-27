const path = require('path');
const fs = require('fs/promises');

const PATH_FILE = "../../users.json";

const readUserModel = async () => {
  const filePath = path.join(__dirname, PATH_FILE);
  const data = JSON.parse(await fs.readFile(filePath));
  return data;
};

module.exports = {
  readUserModel,
};