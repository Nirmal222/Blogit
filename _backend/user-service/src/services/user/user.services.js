// required models 
const { UserModel, } = require("../../models/index");
// required modules
const crypto = require("crypto")
const bcrypt = require("bcrypt");
// required utilities
const { createToken } = require("../../utils/index");

const usersignup = async (req, res)=>{
    try{
        const { name, email, password } = req.body;
        const user = new UserModel({
            name, 
            email, 
            password, 
            emailToken: crypto.randomBytes(64).toString('hex'),
            isVerified: false
        })
        const salt = await bcrypt.genSalt();
        const hashPassword = await  bcrypt.hash(user.password, salt);
        user.password = hashPassword;
        const newUser = await user.save();
        res.send({
            message: "User Created Successfullt",
            userDetails: newUser,
        })
    }catch(err){
        console.log("Error is:", err);
        res.send()
    }
}

const userlogin = async (req, res)=>{
    try{
        const { email, password } = req.body;
        const findUser = await UserModel.findOne({email: email});
        if(findUser){
            const match = await bcrypt.compare(password, findUser.password);
            const token = createToken(findUser?.id);
            res.cookie("access-token", token);
            if(match) res.status(200).send({
                message: "user logged in successfully",
                token: token,
            })
        }
    }catch(err){
        console.log("Error is:",err);
        return res.status(404).send("Authentication Error");
    }
}


module.exports = { usersignup, userlogin };