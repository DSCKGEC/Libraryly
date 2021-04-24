const express = require('express');
const Router = express.Router();
const categoryController = require('../controllers/category.controller');
const isLoggedin=require('../middlewares/login.middleware');

/* ------------ Endpoint Definitions ----------- */
Router.route('/').get(isLoggedin(),categoryController.renderAllCategory);

Router.route('/add')
    .get(isLoggedin(),categoryController.renderNewCategory)
    .post(isLoggedin(),categoryController.newCategory);

module.exports = Router;
