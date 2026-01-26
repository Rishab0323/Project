const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainRouter = require("./routes/index_route");
const cors = require("cors");
const user1 = require("./routes/user");
// const user = require("./database/db");

app.use(cors());
app.use(express.json());

app.use("api/user",user1);
app.use("/api/paytm",mainRouter);

require('dotenv').config();

mongoose.connect(process.env.mongo_url)
.then(() => {
    app.listen(process.env.port1,() => {
        console.log("connnected to db & listening to port",process.env.port1);
    })
})
.catch((err) => {
    console.log("error while connection",err);
})