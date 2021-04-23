const express = require('express');
const Router = express.Router();
const categoryController = require('../controllers/category.controller');

/* ------------ Endpoint Definitions ----------- */
Router.route('/').get(categoryController.renderAllCategory);

Router.route('/add')
    .get(categoryController.renderNewCategory)
    .post(categoryController.newCategory);

module.exports = Router;
