const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8001
const { connect:dbConnect } = require("./src/config/index");
const cookieParser = require("cookie-parser");
// template engine 
const hbs = require("hbs");
// user controller
const { userRouter } = require("./src/controllers/index");
// user routes
const { home, user } = require("./src/constants/index"); 
const app = express();
// template engine 
app.set("view engine", hbs);
// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// User Router 
app.use(user, userRouter );
app.get(home,async (req,res)=>{
    res.render("index")
})

dbConnect().then(()=>{
    app.listen(PORT, async()=>{
        console.log("Listening on PORT: http://localhost:"+PORT);
    })
})