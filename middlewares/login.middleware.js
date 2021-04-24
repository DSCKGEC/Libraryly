const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

/* ------------ Authentication Middleware ----------- */
// TODO: redirect to login with partials for all 401 and 500 responses

// IsLoggedInMiddleware ... receives group as parameter and validates the user from jwt token stored in cookies
const IsLoggedInMiddleware = () => {
    return async (req, res, next) => {
        // Access token from cookies
        var cookie = JSON.parse(JSON.stringify(req.cookies));
        if (cookie['isloggedin'] === undefined) {
            // TODO: redirect to login page
            res.send("Not logged in.")
        }
        else
        {
            let token = req.cookies['isloggedin'];

            // Token not found
            if (!token) res.status(401).json('Not Logged In');

            try {
                // Unsign and verify the jwt token
                let decoded = jwt.verify(token, process.env.JWT_SECRET);

                // Failed verification
                if (!decoded)
                    return res.status(401).json('Expired or Invalid token');

                // Call next middleware on successful validation
                next();
            } catch (error) {
                return res.status(500).json(error);
            }
        }
    };
};

module.exports = IsLoggedInMiddleware;
