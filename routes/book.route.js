const express = require('express');
const Router = express.Router();
const bookController = require('../controllers/book.controller');
const userAuth = require('../middlewares/auth.middleware');
const isLoggedin = require('../middlewares/login.middleware');
const SanitizerMiddleware = require('../middlewares/sanitize.middleware');
/* ------------ Endpoint Definitions ----------- */
Router.route('/').get(
    isLoggedin(),
    userAuth('all'),
    bookController.renderAllBooks
);

Router.route('/add')
    .get(isLoggedin(), userAuth('librarian'), bookController.renderAddBook)
    .post(
        isLoggedin(),
        userAuth('librarian'),
        SanitizerMiddleware(),
        bookController.addBook
    );

Router.route('/:id')
    .get(isLoggedin(), userAuth('all'), bookController.renderBook)
    .delete(isLoggedin(), userAuth('all'), bookController.deleteBook);

Router.route('/edit/:id')
    .get(isLoggedin(), userAuth('librarian'), bookController.renderEditBook)
    .post(
        isLoggedin(),
        userAuth('librarian'),
        SanitizerMiddleware(),
        bookController.editBook
    );

Router.route('/find/:field/:query').get(
    isLoggedin(),
    userAuth('librarian'),
    SanitizerMiddleware(),
    bookController.renderSearchBook
);

module.exports = Router;
