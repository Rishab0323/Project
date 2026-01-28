const {JWT_SECRET} = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.starsWith('Bearer')){
        return res.status(403).json({msg : "token not in bearer form / invalid req"});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET);

        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        } else{
            return res.status(403).json({msg :"auth checkpoint 2 fail"});
        }
    }
    catch(err){
        return res.status(403).json({msg : err});
    }
}

module.exports ={authMiddleware};

