const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */
Router.get('/register', userController.renderRegister);

Router.get('/register/:error', userController.renderRegisterError);

Router.get('/registersuccess', userController.renderRegisterSuccess);

Router.post('/register', userController.Register);

Router.get('/login', userController.renderLogin);

Router.get('/login/:error', userController.renderLoginError);

Router.post('/login', userController.Login);

Router.get('/api/email/:id', userController.apiEmail);

Router.get('/api/username/:id', userController.apiUsername);

// Test route - to be deleted
Router.post('/test', userAuth('member'), (req, res) =>
    res.status(200).send('Authentication Middleware Works!')
);

module.exports = Router;
