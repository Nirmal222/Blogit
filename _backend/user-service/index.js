const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8001
const { connect:dbConnect } = require("./src/config/index");
// user controller
const { userRouter } = require("./src/controllers/index");
// user routes
const { home, user } = require("./src/constants/index"); 
const app = express();



app.use(cors());
app.use(express.json());

app.use(user, userRouter );

app.use(home,async (req,res)=>{
    res.send("The Server is Up and Running")
})

dbConnect().then(()=>{
    app.listen(PORT, async()=>{
        console.log("Listening on PORT: http://localhost:"+PORT);
    })
})