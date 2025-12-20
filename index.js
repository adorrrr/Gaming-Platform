//Express require
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/user.js");
const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true }));
app.use(methodOverride("_method"));

//mongoose setup
main().then( () => {
    console.log("connection successful");
}) 
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/gamingApp");
};


app.get("/home", async (req, res) => {        
    res.render("index"); // সঠিক
});

//New route
app.get("/game/tic-tac", (req, res) =>{
    res.render("new.ejs");
});
app.get("/game/guessing", (req, res) =>{
    res.render("new.ejs");
});
app.get("/game/memory-card", (req, res) =>{
    res.render("new.ejs");
});
app.get("/game/rock-paper", (req, res) =>{
    res.render("new.ejs");
});
app.get("/game/reaction-time", (req, res) =>{
    res.render("new.ejs");
});





app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
});

app.get("/", (req, res) => {
     res.send("kichu ekta hoche");
});

