/* ------------ Imports ----------- */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const session = require('express-session');
const MongoDBStore = require('connect-mongo')(session);
const flash = require('express-flash');
const helmet = require('helmet');
const methodOverride = require('method-override');

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

const secret = process.env.SECRET;

const store = new MongoDBStore({
    url: uri,
    secret,
    touchAfter: 24 * 60 * 60,
});

store.on('error', function (e) {
    console.log('SESSION STORE ERROR', e);
});

// session initialization
const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

// allow cors, json, string and array parsing,session, flash and helmet
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(flash());
app.use(methodOverride('_method'));
app.use(helmet({ contentSecurityPolicy: false }));

// use ejs template engine and allow serving static files
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

// use favicon
app.use(favicon(__dirname + '/views/img/favicon.ico'));

//include routes from /
app.get('/', (req, res) => {
    res.render('index');
});

// include routes from /users
const userRouter = require('./routes/user.route');
app.use('/users', userRouter);

//include routes from /books

const bookRouter = require('./routes/book.route');
app.use('/books', bookRouter);

//include routes from /issue
const issueRouter = require('./routes/issue.route');
app.use('/issue', issueRouter);

//include routes from /category
const categoryRouter = require('./routes/category.route');
app.use('/category', categoryRouter);

// handle all routes without endpoints
app.get('*', (req, res) => {
    res.render('not-found');
});
// start the libraryly server
app.listen(port, () =>
    console.log(`LIBRARYLY running at http://localhost:${port}`)
);
