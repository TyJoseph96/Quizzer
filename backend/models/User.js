// ============================================
// models/User.js
// Defines the structure of a user in MongoDB
// ============================================

//Import mongoose

const mongoose = require("mongoose");

// Define the schema — the structure of each user document
// Think of it like a template for every user object in the database
const userSchema = new mongoose.Schema ({

username: {
    type: String,
    //must be a string
    required: true,
    // must be provided - cant create user without it
    unique: true,
    // no two users can hace the same username
    trim: true,
    // removes whitespace from start and end
    minlength: 4,
    //minimum characterd 4
    maxlength: 15,
    //max characters 15
},

email: {
    type: String,
    required: true,
    unique: true,
    // no two users can have the same email
    trim: true,
    lowercase: true
    // always stores emails in lowercadse
},

password: {
    type: String,
    required: true,
    minlength: 6,
},

dob: {
    type: Date,
    required: false
},

resetToken: {
    type: String,
    default: null,
},

resetTokenExpiry: {
    type: Date,
    default: null,
},

createdAt: {
    type: Date,
    default: Date.now
    // automatically sets to current data when user is created
}

});

// Export the model so other files can use it
// "User" is the name — MongoDB will create a "users" collection
module.exports = mongoose.model("User", userSchema);