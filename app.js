/* ------------ Imports ----------- */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

/* ------------ Configs ----------- */

// initialize module to access .env variables
require('dotenv').config();

// access port from env
const port = Number(process.env.PORT);

// db connection variables
const uri = String(process.env.MONGO_URI);
const connectOptions = {
    useNewUrlParser: true, // used for parsing the uri
    useCreateIndex: true, // use mongoose's default index
    useUnifiedTopology: true, // use the newer topology engine
    useFindAndModify: false, // allow findOneAndUpdate()
};

/* ------------ MongoDB Setup ----------- */

// initiate connection to mongodb
mongoose
    .connect(uri, connectOptions)
    .then()
    .catch((err) => console.log('Error:' + err));

// log message on connection success
mongoose.connection.once('open', () =>
    console.log('Connected to MongoDB successfully...')
);

/* ------------ Express Setup ----------- */

// initialize the express application
const app = express();

// allow cors, json, string and array parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// use ejs template engine and allow serving static files
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

// include routes from /routes
const userRouter = require('./routes/user.route');
app.use('/', userRouter);

// start the libraryly server
app.listen(port, () =>
    console.log(`LIBRARYLY running at http://localhost:${port}`)
);
