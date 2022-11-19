const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require ('dotenv');

dotenv.config();


app.listen(process.env.PORT || 8800,() =>{
    console.log("Backend server is running!")
})