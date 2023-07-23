const express = require("express");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// required services 
const { usersignup } = require("../../services/index");

// reuqired routes
const { signup } = require("../../constants/index");

const app = express.Router();

app.post(signup, usersignup)



module.exports = app;