const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoute = require('./routes/Post');
const loginRoute = require("./routes/Validation");
const getRoute = require("./routes/GetData");

let app = express();

app.use(cors());
app.use('/', postRoute);
app.use("/", loginRoute);
app.use('/uploads', express.static('uploads'));
app.use('/',getRoute);

let port = 2407;

app.listen(port, () => {
    console.log(`Listening From Port: ${port}`);
} );

let connectToDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://subhash007:subhash007@cluster0.1kse9up.mongodb.net/userDetails?retryWrites=true&w=majority');
        console.log('Successfully Connected to Database');
    } catch (error) {
        console.log('Unable to Connect', error);
    }
}

connectToDB();

