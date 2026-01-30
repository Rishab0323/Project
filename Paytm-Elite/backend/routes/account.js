const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware");
const { Account } = require("../database/db");

router.get("/balance",authMiddleware, async(req,res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    
    res.json({balance: account.balance});
});

router.post("/transfer",authMiddleware,async (req,res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amonut,to} = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: " insufficient balance" 
        })
    }

    const toAccount = await Account.findOne({userId : to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "invalid account"
        });
    }

    await Account.updateOne({userId: req.userId},{$inc: { balance: -amount}}).session(session);
    await Account.updateOne({userId: to},{$inc: {balance: amount}}).session(session);

    await session.commitTransaction();
    res.json({
        message : "transer successfull"
    });

});

module.exports = router;