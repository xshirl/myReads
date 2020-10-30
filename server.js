const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
