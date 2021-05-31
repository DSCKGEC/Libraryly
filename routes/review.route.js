const express = require('express');
const Router = express.Router({ mergeParams: true });
const reviewController = require('../controllers/review.controller');
const isLoggedin = require('../middlewares/login.middleware');
const userAuth = require('../middlewares/auth.middleware');
const SanitizerMiddleware = require('../middlewares/sanitize.middleware');
const checkReviewer = require('../middlewares/checkreviewer.middleware');
/* ------------ Endpoint Definitions ----------- */

Router.route('/create')
    .get(isLoggedin(), userAuth('all'), reviewController.renderAddReview)
    .post(
        isLoggedin(),
        userAuth('all'),
        SanitizerMiddleware(),
        reviewController.addReview
    );

Router.route('/update/:reviewId')
    .get(isLoggedin(), userAuth('all'), reviewController.renderUpdateReview)
    .post(
        isLoggedin(),
        userAuth('all'),
        SanitizerMiddleware(),
        checkReviewer(),
        reviewController.updateReview
    );

Router.route('/delete/:reviewId').delete(
    isLoggedin(),
    userAuth('all'),
    checkReviewer(),
    reviewController.deleteReview
);

module.exports = Router;
