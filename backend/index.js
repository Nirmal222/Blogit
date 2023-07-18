const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const dbConnect = require("./src/config/dbConnect");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async(req, res)=>{
    res.send("Backend is running successfully!");
})

dbConnect().then(()=>{
    app.listen(PORT, async()=>{
        console.log("Listening on PORT: http://localhost:"+PORT);
    })
})