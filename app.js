const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


const Credentials = require("./models/credential");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/credentials', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.get("/", (req, res) => {
    res.render('index')
})

app.post("/login", (req, res) => {
    res.render('login')
    console.log(req.body);
    const { username, email, password } = req.body;
    console.log(`The username is ${username}, with email ${email}`)



})

app.get("/welcome", (req, res) => {
    res.send("You are welcome to get response");

})

app.get("/login", (req, res) => {
    res.render('login');

})

app.listen(3000, () => {
    console.log("App is listening");
})