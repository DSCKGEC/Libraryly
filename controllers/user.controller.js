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

let options_loggedin = {
    path: '/',
    sameSite: true,
    maxAge: 1000 * 60 * 60 * Number(process.env.EXPIRY), // would expire after 30 hours
    httpOnly: true, // The cookie only accessible by the web server
};
/* ------------ Controllers ----------- */

const renderRegister = (req, res) => {
    res.render('register');
};

const renderLogin = (req, res) => {
    res.render('login');
};

// Register controller ... uses the Register service to create new user
const Register = async (req, res) => {
    // Generate custom _id using helper method
    req.body._id = helper.getRandomHex(7);

    try {
        // receives the created user document as object
        const result = await userService.Register(req.body);

        // redirect to login
        req.flash(
            'success',
            'Successfully Registered. Wait before you are verified.'
        );
        res.redirect('login');
    } catch (err) {
        // redirect to render with error
        req.flash('err', err);
        res.redirect('register');
    }
};

// Login controller ... uses the Login service to validate user login and store jwt token in cookies
const Login = async (req, res) => {
    try {
        // receives jwt token and user document as object
        const result = await userService.Login(
            req.body.email,
            req.body.password
        );

        // Store the jwt token in the cookies
        res.cookie('x-access-token', result.token, options);

        res.cookie('isloggedin', result.token, options_loggedin);
        // TODO: redirect to dashboard
        res.status(200).json(result);
    } catch (err) {
        // redirect to login with error
        req.flash('err', err);
        res.redirect('login');
    }
};

const apiEmail = async (req, res) => {
    var email = req.params.id;
    const user = await userService.apiEmail(email);
    if (!user) {
        res.send('0');
    } else {
        res.send('1');
    }
};

const apiUsername = async (req, res) => {
    var uname = req.params.id;
    const user = await userService.apiUsername(uname);
    if (!user) {
        res.send('0');
    } else {
        res.send('1');
    }
};

const logout = (req, res) => {
    res.clearCookie('isloggedin');
    res.clearCookie('x-access-token');
    res.status(200).send('Logged Out');
};

const renderImage = (req, res) => {
    req.flash('info', 'upload your image');
    res.render('dashboards/uploadimage');
};

const uploadImage = async (req, res) => {
    var path = req.file['path'];
    var userid = req.body.user_id;
    try {
        await userService.updateImage(userid, path);
        //TODO : redireect to dashboard with success message.
        res.status(200).send('Image Uploaded Successfully');
    } catch {
        // TODO: redirect to dashboard error screen
        res.status(500).send('Error');
    }
};

const renderDashboard = (req, res) => {
    var group = req.body.group;
    if (group === 'admin') {
        res.render('dashboards/dashboard_admin', {
            username: req.body.username,
        });
    } else if (group === 'member') {
        res.render('dashboards/dashboard_member', {
            username: req.body.username,
        });
    } else {
        res.render('dashboards/dashboard_librarian', {
            username: req.body.username,
        });
    }
};

module.exports = {
    Register,
    Login,
    renderRegister,
    renderLogin,
    apiEmail,
    apiUsername,
    logout,
    renderImage,
    uploadImage,
    renderDashboard,
};
