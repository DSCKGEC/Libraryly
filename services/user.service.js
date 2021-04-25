const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* ------------ JWT Configs ----------- */

const expiry_length = parseInt(process.env.EXPIRY) * 86400;
const jwt_headers = {
    algorithm: 'HS256',
    expiresIn: expiry_length,
};

/* ------------ Services ----------- */

// Register service ... receives user object and creates new user document in the DB
const Register = async (userBody) => {
    try {
        return await User.create(userBody);
    } catch (error) {
        throw error;
    }
};

// Login service ... receives email, password and validates the user login
const Login = async (email, password) => {
    // Find user in the database
    const user = await User.findOne({ email });

    // Email doesn't match
    if (!user) throw 'Invalid Email or Password';

    // Password doesn't match
    if (!(await bcrypt.compare(password, user.password)))
        throw 'Invalid Email or Password';

    // User banned or unverified
    if (user.status !== 'verified')
        throw 'Wait for your account to be approved for logging in';

    // Create JWT token
    const accessToken = jwt.sign(
        { email: user.email, user_id: user._id },
        process.env.JWT_SECRET,
        jwt_headers
    );

    return {
        token: accessToken,
        user: user,
    };
};

const apiEmail = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
};

const apiUsername = async (uname) => {
    const user = await User.findOne({ username: uname });
    return user;
};

const updateImage=async(userid,path)=>
{
    try
    {
        await User.findOneAndUpdate({_id:userid},{picture_url:path});
    }
    catch(err)
    {
        throw err;
    }
};
module.exports = {
    Register,
    Login,
    apiEmail,
    apiUsername,
    updateImage
};
