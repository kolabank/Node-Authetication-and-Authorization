const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


const User = require("./models/user");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true })
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

app.post("/login", async(req, res) => {
    res.render('login')
    const { username, email, password } = req.body;
    console.log(`The username is ${username}, with email ${email}`)

    const newUser = new User(req.body);
    await newUser.save();

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