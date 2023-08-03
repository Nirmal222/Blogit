const express = require("express");
// required services 
const { usersignup, userlogin, userlogout, userDetails } = require("../../services/index");
// reuqired routes
const { signup, login, logout, details } = require("../../constants/index");

const app = express.Router();

app.post(signup, usersignup);

app.post(login, userlogin);

app.get(details, userDetails);

app.post(logout, userlogout);

module.exports = app;