const express = require("express");
const router = require("./Router");
const { initProcess } = require("./ProcessService");
const app = express();
const port = process.env.PORT ? process.env.PORT : 3001;

let status = initProcess();

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
