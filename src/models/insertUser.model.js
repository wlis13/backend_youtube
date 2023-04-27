const path = require('path');
const fs = require('fs/promises');

const PATH_FILE = "../../users.json";

const insertUserModel = async (newUser) => {
  const filePath = path.join(__dirname, PATH_FILE);
  const data = JSON.parse(await fs.readFile(filePath));
  data.push({ id: data.length, ...newUser });
  await fs.writeFile(filePath, JSON.stringify(data));
};

module.exports = {
  insertUserModel,
};
