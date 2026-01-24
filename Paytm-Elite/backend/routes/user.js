const express = require("express");
const router = express.Router();
import { User } from "../database/db";

const signupData = {
    username : zod.string().email(),
    password : zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
}

router.get("/signup",(req,res) => {
    const {successData} = signupData.safeParse(req.body)
    if(!successData){
        return res.status(411).json({message : "Email already exist / invalid input"});
    }

    const userExist = User.findOne({
        username : req.body.username
    });

    if(userExist){
        return res.status(411).json({msg : " user already exist"});
    }

    const user = User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }.JWT_SECRET);

    res.send({
        message : "user created succesfully",
        token : token
    })

})

module.exports = router;