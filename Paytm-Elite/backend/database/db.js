const mongoose = require("mongoose");

mongoose.connect("");

const UserSchema =  mongoose.Schema({
    username: String,
    password: String,
    firstName : String,
    lastName : String
});

const User = mongoose.model("User",UserSchema); 

module.exports = {
    User
}