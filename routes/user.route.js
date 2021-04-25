const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');
const isloggedin = require('../middlewares/login.middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

/* ------------ Endpoint Definitions ----------- */
Router.route('/register')
    .get(userController.renderRegister)
    .post(userController.Register);

Router.route('/login')
    .get(userController.renderLogin)
    .post(userController.Login);

Router.route('/api/email/:id').get(userController.apiEmail);

Router.route('/api/username/:id').get(userController.apiUsername);

Router.route('/logout').post(isloggedin(), userController.logout);

Router.route('/image')
    .get(isloggedin(), userAuth('all'), userController.renderImage)
    .post(
        isloggedin(),
        upload.single('image'),
        userAuth('all'),
        userController.uploadImage
    );

Router.route('/dashboard').get(
    isloggedin(),
    userAuth('all'),
    userController.renderDashboard
);

module.exports = Router;
