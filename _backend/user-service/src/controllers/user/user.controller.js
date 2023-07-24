const express = require("express");
// required services 
const { usersignup, userlogin } = require("../../services/index");
// reuqired routes
const { signup, login } = require("../../constants/index");

const app = express.Router();

app.post(signup, usersignup);

app.post(login, userlogin);

module.exports = app;