const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

/* ------------ Authentication Middleware ----------- */
// TODO: redirect to login with partials for all 401 and 500 responses

// UserAuthenticationMiddleware ... receives group as parameter and validates the user from jwt token stored in cookies
const UserAuthenticationMiddleware = (group) => {
    return async (req, res, next) => {
        // Access token from cookies
        let token = req.cookies['x-access-token'];

        // Token not found
        if (!token) res.status(401).json('Token not found');

        try {
            // Unsign and verify the jwt token
            let decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Failed verification
            if (!decoded)
                return res.status(401).json('Expired or Invalid token');

            // Fetch user from DB
            let user = await User.findOne({ email: decoded.email });

            // Check for user authenticity
            if (!user || user.status !== 'verified')
                return res.status(401).json({ message: 'Invalid User' });

            // Check for user permissions
            if (group !== 'all' && user.group !== group)
                return res.status(401).json({ message: 'Permission Denied' });

            // Add user properties to the request body
            req.body.email = user.email;
            req.body.user_id = user._id;
            req.body.group = user.group;

            // Call next middleware on successful validation
            next();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
};

module.exports = UserAuthenticationMiddleware;
