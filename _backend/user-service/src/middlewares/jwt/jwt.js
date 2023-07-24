const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const tokenVerification = async (req, res, next)=>{
    const token = req.cookies['access-token'];
    if(token){
        const validation = await jwt.verify(token, process.env.JWT_SECRET);
        if(validation){
            res.user = validation.id;
            next();
        }else{
            console.log("token expires");
        }
    }else{
        console.log("Token not found");
    }
}

module.exports = { tokenVerification };