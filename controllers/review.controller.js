const reviewService = require('../services/review.service');

const renderAddReview = (req, res) => {
    res.status(200).send('Add Review');
};

const renderUpdateReview = (req, res) => {
    res.status(200).send('Update Review');
};

//addReview controller uses addReview service to create new review
const addReview = async (req, res) => {
    req.body.book = req.params.bookId;
    try {
        //recieves the created review document as object
        const review = await reviewService.addReview(req.body);
        if (review) {
            //updates the avg rating of book using bookRatingUpdate service
            await reviewService.bookRatingUpdate(req.body.book);
        }
        res.status(200).send(review);
    } catch (err) {
        res.status(500).send(err);
    }
};

//updateReview controller uses updateReview service to update the existing review
const updateReview = async (req, res) => {
    const reviewId = req.params.reviewId;
    const bookId = req.params.bookId;
    try {
        //recieves the updated review document as object
        const updatedreview = await reviewService.updateReview(
            reviewId,
            req.body
        );

        if (updatedreview) {
            //updates the avg rating of book using bookRatingUpdate service
            await reviewService.bookRatingUpdate(bookId);
        }

        res.status(200).send(updatedreview);
    } catch (err) {
        res.status(500).send(err);
    }
};

const deleteReview = async (req, res) => {
    const reviewId = req.params.reviewId;
    const bookId = req.params.bookId;
    try {
        //deletes the existing review
        await reviewService.deleteReview(reviewId);
        //updates the avg rating of book using bookRatingUpdate service
        await reviewService.bookRatingUpdate(bookId);
        // TODO: redirect to delete success
        res.status(200).send('Delete Success');
    } catch (err) {
        // TODO: redirect to delete error
        res.status(500).send('Error ' + err);
    }
};

module.exports = {
    addReview,
    renderAddReview,
    updateReview,
    renderUpdateReview,
    deleteReview,
};
