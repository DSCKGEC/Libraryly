const express = require('express');
const Router = express.Router();
const bookController = require('../controllers/book.controller');
const userAuth = require('../middlewares/auth.middleware');
const isLoggedin = require('../middlewares/login.middleware');

/* ------------ Endpoint Definitions ----------- */
Router.route('/add')
    .get(isLoggedin(), userAuth('librarian'), bookController.renderAddBook)
    .post(isLoggedin(), userAuth('librarian'), bookController.addBook);

Router.route('/:id')
    .get(isLoggedin(), bookController.renderBook)
    .delete(isLoggedin(), bookController.deleteBook);

Router.route('/edit/:id')
    .get(isLoggedin(), userAuth('librarian'), bookController.renderEditBook)
    .post(isLoggedin(), userAuth('librarian'), bookController.editBook);

Router.route('/find/:field/:query').get(
    isLoggedin(),
    bookController.renderSearchBook
);

module.exports = Router;
