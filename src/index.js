const express = require('express');
const { userRouter } = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.use("/", userRouter);

app.listen(3001, () => console.log('Servidor escutando na porta 3001'));
