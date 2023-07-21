const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8001

const app = express();

app.use(cors());
app.use(express.json());
