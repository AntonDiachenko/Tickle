const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotnet = require ('dotnet');

dotnet.config();


app.listen(8800,() =>{
    console.log("Backend server is running!")
})