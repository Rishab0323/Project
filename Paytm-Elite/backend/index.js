const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);

require('dotenv').congfig();

mongoose.connect(process.env.mongo_url)
.then(() => {
    app.listen(process.env.port1,() => {
        console.log("connnected to db & listening to port",process.env.port1);
    })
})
.catch((err) => {
    console.log("error while connection",err);
})