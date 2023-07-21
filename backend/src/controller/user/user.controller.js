const express = require("express");
// Model Imports 
const { User, Blog, Otp } = require("../../model/index");
// Middleware Imports 
const validatEmail = require("../../middlewares/index");
// utility imports 
const { transporter, generateOTP } = require("../../utils");
// dotenv 
require('dotenv').config();
const app = express.Router();


app.post("/", validatEmail, async (req, res) => {
    try {

        if (!req.body.email || !req.body.name || !req.body.age) return res.status("400").send("Please Enter Valid Details..");

        let user = await User.find({ "email": req?.body?.email });
        if (user.length) {
            return res.status(404).send("User Already Exist")
        } else {

            let newUser = await User.create(req?.body);
            return res.status(200).send("User Created Succesfully, User Details:" + newUser);
        }
    } catch (error) {
        console.log(error);
        return res.send("Error is:" + error);
    }
})

app.post("/send-otp", async (req, res) => {
    try {
        const { name, email } = req.body;

        // Generate a new OTP
        const otp = await Otp.create({ otp: generateOTP(6) });

        // Configure the email content
        const mailOptions = {
            from: 'nirmalkumargurajada@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Hello ${name}, Your OTP for signup is: ${otp}`,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending OTP:', error);
                res.status(500).json({ error: 'Failed to send OTP' });
            } else {
                console.log('OTP sent successfully:', info.response);
                res.status(200).json({ message: 'OTP sent successfully' });
            }
        });

    } catch (error) {
        res.send("Error is:" + error);
    }
})

app.get("/user-details/:email", async (req, res) => {
    try {
        const userDetails = User.findOne({ "email": req?.params?.email });
        if (userDetails) {
            return res.status(200).send("User details:" + userDetails);
        } else {
            return res.status(404).send("User Not found please sign up")
        }
    } catch (error) {
        return res.status(400).send("Error is:", error);
    }
})

module.exports = app;