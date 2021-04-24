const express = require('express');
const Router = express.Router();
const issueController = require('../controllers/issue.controller');

/* ------------ Endpoint Definitions ----------- */
Router.route('/new')
    .get(issueController.renderNewIssue)
    .post(issueController.newIssue);

Router.route('/:id').get(issueController.renderIssue);

Router.route('/return/:id').post(issueController.returnBook);

module.exports = Router;
