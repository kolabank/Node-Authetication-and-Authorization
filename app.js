const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const Credentials = require("./models/credential");

mongoose.connect('mongodb://localhost:27017/credentials', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })