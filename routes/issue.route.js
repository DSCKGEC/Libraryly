const express = require('express');
const Router = express.Router();
const issueController = require('../controllers/issue.controller');
const isLoggedin = require('../middlewares/login.middleware');
const userAuth = require('../middlewares/auth.middleware');
/* ------------ Endpoint Definitions ----------- */
Router.route('/new')
    .get(isLoggedin(), userAuth('all'), issueController.renderNewIssue)
    .post(isLoggedin(), userAuth('all'), issueController.newIssue);

Router.route('/:id').get(
    isLoggedin(),
    userAuth('all'),
    issueController.renderIssue
);

Router.route('/return/:id').post(
    isLoggedin(),
    userAuth('all'),
    issueController.returnBook
);

module.exports = Router;
