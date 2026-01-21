const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
app.use(express.json());

app.use("/api/v1",mainRouter);

require('dotenv').congfig();
