//Mongoose require
const mongoose = require("mongoose");
const Chat = require("./models/user.js");

//mongoose setup
main().then( () => {
    console.log("connection successful");
}) 
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/gamingApp");
}


const users = [
  {
    "username": "adar",
    "email": "adar@gmail.com",
    "password": "ador",
    "games": [
      { "gameName": "Tic Tac Toe", "score": 2 }
    ]
  },
  {
    "username": "rahim",
    "email": "rahim@gmail.com",
    "password": "$2b$10$hashedPassword2",
    "games": [
      { "gameName": "Tic Tac Toe", "score": 1 },
    ]
  },
  {
    "username": "karim",
    "email": "karim@gmail.com",
    "password": "$2b$10$hashedPassword3",
    "games": [
      { "gameName": "Tic Tac Toe", "score": 4 }
    ]
  },
  {
    "username": "sadia",
    "email": "sadia@gmail.com",
    "password": "$2b$10$hashedPassword4",
    "games": [
      { "gameName": "Tic Tac Toe", "score": 2 }
    ]
  },
  {
    "username": "tanvir",
    "email": "tanvir@gmail.com",
    "password": "$2b$10$hashedPassword5",
    "games": [
      { "gameName": "Tic Tac Toe", "score": 3 }
    ]
  }
]


Chat.insertMany(users);