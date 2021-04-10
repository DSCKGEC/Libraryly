const express = require('express');
const Router = express.Router();

const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');


/* ------------ Endpoint Definitions ----------- */

Router.post('/register', userController.Register);
Router.post('/login', userController.Login);
// Test route - to be deleted
Router.post('/test', userAuth('member'), (req, res) =>
    res.status(200).send('Authentication Middleware Works!')
);

module.exports = Router;
