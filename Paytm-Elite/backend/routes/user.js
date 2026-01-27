const express = require("express");
const zod = require("zod");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../database/db");
const {authMiddleware} = require("../middleware");

const signupData = zod.object( {
    username : zod.string().email(),
    password : zod.string().min(6),
    firstname : zod.string(),
    lastname : zod.string()
})

router.get("/signup", async (req,res) => {
    const {successData} = signupData.safeParse(req.body)
    if(!successData){
        return res.status(411).json({message : "Email already exist / invalid input"});
    }

    const userExist = await User.findOne({
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
    try{
    const {username,password} = req.body;

        if(!username || !password){
            return res.status(400).json({msg : "missing input"});
        }
    
        const user_exist = await User.findOne({username});

        if(!user_exist){
            return res.status(401).json({msg : "user not found"});
        }

        const match_pass = await bcrypt.compare(password,user_exist.password);
        if(!match_pass){
            return res.status(401).json({msg : "invalid  login credentials"});
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

router.get("/testing",(req,res) => {
    res.send('databbase is worling')
})

const updateBody = zod.body({
    password : zod.string().option(),
    firstname : zod.string().option(),
    lastname : zod.string().option(),
    })

router.put("/",authMiddleware, async (req,res) => {
    const {success} = updateBody.safeParse(req.body)
    if(!success){
    res.status(411).json({
    msg : "error while updating information"
    })
    }

    await User.updateOne(req.body , {
        id : req.userId
    })

    res.json({ msg : " updated successfully"});

})


router.get("/bulk", async (req,res) => {
    const filter = req.body.filter || " ";

    const users = await User.findOne({
        $or: [{
            firstname: {
                "$regex": filter
            }
        },{ lastname: {
                "$regex": filter
            }
        }]
})

    res.json({
    user : users.map(user => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id : user.user_id

        }))
    })

})
module.exports = router;