const express = require('express');
const Router = express.Router();
const issueController = require('../controllers/issue.controller');
const isLoggedin=require('../middlewares/login.middleware');

/* ------------ Endpoint Definitions ----------- */
Router.route('/new')
    .get(isLoggedin(),issueController.renderNewIssue)
    .post(isLoggedin(),issueController.newIssue);

Router.route('/:id').get(isLoggedin(),issueController.renderIssue);

Router.route('/return/:id').post(isLoggedin(),issueController.returnBook);

module.exports = Router;
