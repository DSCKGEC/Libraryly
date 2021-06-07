const reviewService = require('../services/review.service');

/* ------------ Check Reviewer Middleware ----------- */

// CheckReviewerMiddleware ... checks the reviewer
const CheckReviewerMiddleware = () => {
    return async (req, res, next) => {
        try {
            const reviewer = await reviewService.findReviewer(
                req.params.reviewId
            );
            if (reviewer.user_id !== req.body.user_id) {
                res.status(401).send('You are not the Reviewer of this review');
            } else {
                next();
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    };
};

module.exports = CheckReviewerMiddleware;
