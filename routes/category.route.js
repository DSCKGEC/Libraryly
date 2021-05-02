const express = require('express');
const Router = express.Router();
const categoryController = require('../controllers/category.controller');
const isLoggedin = require('../middlewares/login.middleware');
const userAuth = require('../middlewares/auth.middleware');
const SanitizerMiddleware = require('../middlewares/sanitize.middleware');
/* ------------ Endpoint Definitions ----------- */
Router.route('/').get(
    isLoggedin(),
    userAuth('all'),
    categoryController.renderAllCategory
);

Router.route('/add')
    .get(
        isLoggedin(),
        userAuth('librarian'),
        categoryController.renderNewCategory
    )
    .post(
        isLoggedin(),
        userAuth('librarian'),
        SanitizerMiddleware(),
        categoryController.newCategory
    );

module.exports = Router;
