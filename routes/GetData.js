const express = require("express");

let router = express.Router();

const User = require("./Schema");

router.get("/getData", async (req,res) => {

    const {
        firstName,
        lastName,
        phone,
        email,
        password,
        confirmPassword,
        address,
        birthday,
        gender,
        age,
        interests,
        profile,
    } = req.query;

    const filter = {};

    if(firstName){
        filter.firstName = firstName;
    }
    if(lastName){
        filter.lastName = lastName;
    }
    if(phone){
        filter.phone = phone;
    }
    if(email){
        filter.email = email;
    }
    if(password){
        filter.password = password;
    }
    if(confirmPassword){
        filter.confirmPassword = confirmPassword;
    }
    if(address){
        filter.address = address;
    }
    if(birthday){
        filter.birthday = birthday;
    }
    if(gender){
        filter.gender = gender;
    }
    if(age){
        filter.age = age;
    }
    if(interests){
        filter.interests = interests;
    }
    if(profile){
        filter.profile = profile;
    }

    let filteredData = await User.find(filter);

    res.json(filteredData);
});

module.exports = router;