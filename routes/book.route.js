const express = require('express');
const Router = express.Router();
const bookController = require('../controllers/book.controller');

/* ------------ Endpoint Definitions ----------- */
// TODO: user must be authorized as admin/librarian
Router.route('/add')
    .get(bookController.renderAddBook)
    .post(bookController.addBook);

Router.route('/:id')
    .get(bookController.renderBook)
    .delete(bookController.deleteBook);

// TODO: user must be authorized as admin/librarian
Router.route('/edit/:id')
    .get(bookController.renderEditBook)
    .post(bookController.editBook);

Router.route('/find/:field/:query').get(bookController.renderSearchBook);

module.exports = Router;
