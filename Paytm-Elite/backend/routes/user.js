const express = require("express");
const zod = require("zod");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const router = express.Router();
import { User } from "../database/db";

const signupData = {
    username : zod.string().email(),
    password : zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
}

router.get("/signup", async (req,res) => {
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

    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
    })

    const userId = user._id;
    const token = jwt.sign({
        userId 
    },JWT_SECRET);

    res.json({
        message : "user created succesfully",
        token : token
    })

})

////////
router.post("/signin", async(req,res) => {
    const {username,password} = req.body;

        if(!username || !password){
            return res.status(400).json({msg : "missing input"});
        }
    try{
        const user_exist = await User.findOne({username});

        if(!user_exist){
            return res.status(411).json({msg : "user not found"});
        }

        const match_pass = await bcrypt.compare(password,user_exist.password);
        if(!match){
            return res.status(401).json({msg : "invalid credentials"});
        }

        const user_id  = user_exist._id
        const token = jwt.sign({ ///check for token snippet
            user_id
        },JWT_SECRET)

        if(user_exist){
            return res.status(200).json({
                msg : "user login done",
                token : token
            })
        }
    }

    catch(error){
        console.log("signin error ",error);
        return res.status(500).json({msg :"login error...."});
    }

})

module.exports = router;