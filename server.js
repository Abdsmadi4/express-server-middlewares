"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const valNum =require('./Middleware/validate-number')
const err500 =require('./Middleware/500')
app.use(express.json());
app.use(cors());


//Routes
app.get("/", (req, res) => {
  res.status(200).send("alive server");
});

app.get("/square", valNum, (req, res) => {
  const data = req.query.num;
  res.status(200).send(data);
});

app.use(err500);

const start = (port) => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

module.exports = {
  app: app,
  start: start,
};
