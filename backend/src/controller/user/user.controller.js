const express = require("express");
// Model Imports 
const {User, Blog} = require("../../model/index");
// Middleware Imports 
const validatEmail = require("../../middlewares/index");

const app = express.Router();


app.post("/", validatEmail, async (req, res) => {
    try {
        
        if(!req.body.email || !req.body.name || !req.body.age) return res.status("400").send("Please Enter Valid Details..");

        let user = await User.find({ "email": req?.body?.email });
        if (user.length) {
            return res.status(404).send("User Already Exist")
        } else {
            let newUser = User.create(req?.body);
            return res.status(200).send("User Created Succesfully, User Details:" + newUser);
        }
    }catch(error){
        console.log(error);
        return res.send("Error is:"+error);
    }
})

app.get("/user-details/:email", async(req, res)=>{
    try{
        console.log(req?.params?.email,"email")
        const userDetails = User.findOne({ "email": req?.params?.email });
        if(userDetails){
            return res.status(200).send("User details:"+userDetails);
        }else { 
            return res.status(404).send("User Not found please sign up")
        }
    }catch(error){
        return res.status(400).send("Error is:", error);
    }
})

module.exports = app;