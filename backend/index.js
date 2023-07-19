const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const dbConnect = require("./src/config/dbConnect");
const { userRouter, blogRouter } = require("./src/controller/index");

const app = express();

app.use(cors());
app.use(express.json());

// Router Middlewares
app.use("/user",userRouter);
// app.use("/blog", blogRouter);        

app.get("/", async(req, res)=>{
    res.send("Backend is running successfully!");
})

dbConnect().then(()=>{
    app.listen(PORT, async()=>{
        console.log("Listening on PORT: http://localhost:"+PORT);
    })
})