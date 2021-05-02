const express = require('express');
const Router = express.Router();
const issueController = require('../controllers/issue.controller');
const isLoggedin = require('../middlewares/login.middleware');
const userAuth = require('../middlewares/auth.middleware');
const SanitizerMiddleware = require('../middlewares/sanitize.middleware');
/* ------------ Endpoint Definitions ----------- */
Router.route('/new')
    .get(isLoggedin(), userAuth('all'), issueController.renderNewIssue)
    .post(
        isLoggedin(),
        userAuth('all'),
        SanitizerMiddleware(),
        issueController.newIssue
    );

Router.route('/:id').get(
    isLoggedin(),
    userAuth('all'),
    issueController.renderIssue
);

Router.route('/approve/:id').post(
    isLoggedin(),
    userAuth('librarian'),
    issueController.approveIssue
);

Router.route('/return/:id').post(
    isLoggedin(),
    userAuth('all'),
    issueController.returnBook
);

Router.route('/renew/:id').post(
    isLoggedin(),
    userAuth('all'),
    issueController.renewBook
);
module.exports = Router;
