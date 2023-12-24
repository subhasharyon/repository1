const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    password: String,
    confirmPassword: String,
    address: String,
    birthday: String,
    gender: String,
    age: Number,
    interests: String,
    profile: String,
})

let User = new mongoose.model("user", userSchema);

module.exports = User;
