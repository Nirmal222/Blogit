const express = require("express");
// required services 
const { usersignup, userlogin, userlogout, userDetails, userUpdate } = require("../../services/index");
// reuqired routes
const { signup, login, logout, details, update } = require("../../constants/index");

const app = express.Router();

app.post(signup, usersignup);

app.post(login, userlogin);

app.get(details, userDetails);

app.post(logout, userlogout);

app.patch(update, userUpdate);

module.exports = app;