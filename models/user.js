//Mongoose require
const mongoose = require("mongoose");

const gameScoreSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0
    },
    playedAt: {
        type: Date,
        default: Date.now
    }
});


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        maxLenght : 50
    },
    games: [gameScoreSchema],
    created_at: {
      type: Date,
      default: Date.now
    }

});


const User = mongoose.model("User", userSchema);
module.exports = User;