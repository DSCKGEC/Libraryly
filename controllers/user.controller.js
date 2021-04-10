const userService = require('../services/user.service');
const helper = require('../utils/helper');


/* ------------ Configs ----------- */

// Cookie options
let options = {
    path: '/',
    sameSite: true,
    maxAge: 1000 * 60 * 60 * 24 * Number(process.env.EXPIRY), // would expire after 30 days
    httpOnly: true, // The cookie only accessible by the web server
};


/* ------------ Controllers ----------- */

// Register controller ... uses the Register service to create new user
const Register = async (req, res) => {
    // Generate custom _id using helper method
    req.body._id = helper.getRandomHex(7);

    try {
        // receives the created user document as object
        const result = await userService.Register(req.body);

        // TODO: redirect to login
        res.status(200).json(result);
    } catch (err) {
        // TODO: redirect to render with error in partials
        res.status(400).json(err);
    }
};

// Login controller ... uses the Login service to validate user login and store jwt token in cookies
const Login = async (req, res) => {
    try {
        // receives jwt token and user document as object
        const result = await userService.Login(req.body.email, req.body.password);

        // Store the jwt token in the cookies
        res.cookie('x-access-token', result.token, options);

        // TODO: redirect to dashboard
        res.status(200).json(result);
    } catch (err) {
        // TODO: redirect to login with error in partials
        res.status(400).json(err);
    }
};

module.exports = {
    Register,
    Login,
};
