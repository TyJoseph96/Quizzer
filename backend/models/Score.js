// ============================================
// models/Score.js
// Defines the structure of a score in MongoDB
// ============================================

const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        //ObjectId is MongoDBs unique ID type
        ref: "User",
        // references the User model
        required: true
    },

     username: {
        type: String,
        required: true
        // stored directyly so we dont to look up the user every time
     },

     category: {
        type: String,
        required: true
     },

     score: {
        type: Number,
        required: true
     },

     total: {
        type: Number,
        required: true
     },

     createdAt: {
        type: Date,
        default: Date.now
     }
});

module.exports = mongoose.model("Score", scoreSchema);

