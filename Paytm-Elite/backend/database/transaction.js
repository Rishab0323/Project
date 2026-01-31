const mongoose = require("mongoose");
const Account = require("./db");

const transferFund = async(fromAccountId,toAccountId,amount) => {
    //debut from acc
    await Account.findByIdAndUpdate(fromAccountId,{$inc : {balance: -amount}});

    //credit to acc
    await Account.findByIdAndUpdate(toAccountId,{$inc : {balance: amount}});
}

transferFund('fromAccountId','toAccountId',100);
 