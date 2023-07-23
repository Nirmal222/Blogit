// required models 
const { UserModel, } = require("../../models/index");
// required modules
const crypto = require("crypto")
const bcrypt = require("bcrypt");
// required routes 


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
        res.redirect(   )
    }catch(err){
        console.log("Error is:", err);
        res.send()
    }
}

module.exports = usersignup;