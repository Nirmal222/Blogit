const express = require("express");
const {User, Blog} = require("../../model/index");

const app = express.Router();

app.post("/", async (req, res) => {
    try {
        
        if(!req.body.email || !req.body.name || !req.body.age) return res.status("400").send("Please Enter Valid Details..");

        let user = await User.find({ "email": req.body.email });
        if (user.length) {
            return res.status(404).send("User Already Exist")
        } else {
            let newUser = User.create(req.body);
            return res.status(200).send("User Created Succesfully, User Details:" + newUser);
        }
    }catch(error){
        console.log(error);
        return res.send("Error is:"+error);
    }
})

module.exports = app;