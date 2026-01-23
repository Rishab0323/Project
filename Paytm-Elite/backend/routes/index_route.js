const express = require("express");
const router = express.Router();

router.get("/hel",(req,res) => {
    res.send("index route check is activated");

})

module.exports = router;