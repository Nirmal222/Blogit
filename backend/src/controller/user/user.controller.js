const express = require("express");
const User  = require("../../model/index");

const app = express.Router();

app.post("/", (req, res)=>{
    res.send("User Logged in Successfully!")
})