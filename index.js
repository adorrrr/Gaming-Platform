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





app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
});

app.get("/home", async (req, res) => {        
    res.render("index"); // সঠিক
});

app.get("/", (req, res) => {
    res.render("index"); // সঠিক
});

