// required modules
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (id)=>{
    return jwt.sign({id:id}, process.env.JWT_SECRET,{ expiresIn: '10s' });
}

const verifyToken = (token)=>{
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { createToken, verifyToken };