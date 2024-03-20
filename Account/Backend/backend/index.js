const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
const signRouter = require("./routes/route");
app.use(signRouter);

app.listen(PORT,()=>{
    console.log("Running Succesfully!!");
});

const dbconnect = require("./config/database");
dbconnect();