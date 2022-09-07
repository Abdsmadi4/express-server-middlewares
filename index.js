"use strict";

require("dotenv").config();

const server = require("./server");
const port = process.env.PORT || 3001;

server.start(port);