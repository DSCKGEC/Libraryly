const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */
Router.route('/register')
    .get(userController.renderRegister)
    .post(userController.Register);

Router.route('/register/:error').get(userController.renderRegisterError);

Router.route('/registersuccess').get(userController.renderRegisterSuccess);

Router.route('/login')
    .get(userController.renderLogin)
    .post(userController.Login);

Router.route('/login/:error').get(userController.renderLoginError);

Router.route('/api/email/:id').get(userController.apiEmail);

Router.route('/api/username/:id').get(userController.apiUsername);

Router.route('/logout')
    .delete(userController.logout);


module.exports = Router;
