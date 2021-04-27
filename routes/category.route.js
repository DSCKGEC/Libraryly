const express = require('express');
const Router = express.Router();
const categoryController = require('../controllers/category.controller');
const isLoggedin = require('../middlewares/login.middleware');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */
Router.route('/').get(
    isLoggedin(),
    userAuth('all'),
    categoryController.renderAllCategory
);

Router.route('/add')
    .get(isLoggedin(), userAuth('all'), categoryController.renderNewCategory)
    .post(isLoggedin(), userAuth('all'), categoryController.newCategory);

module.exports = Router;
