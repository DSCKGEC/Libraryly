const Review = require('../models/review.model');
const Book = require('../models/book.model');

//addReview service recieves review object and creates new review document in the DB
const addReview = async (reviewBody) => {
    try {
        return await Review.create(reviewBody);
    } catch (err) {
        throw err;
    }
};
//updateReview service recieves review object and updates existing review document in the DB
const updateReview = async (reviewId, reviewBody) => {
    try {
        return await Review.findByIdAndUpdate(reviewId, reviewBody, {
            new: true,
        });
    } catch (err) {
        throw err;
    }
};
//deleteReview service recieves reviewId and deletes existing review document in the DB
const deleteReview = async (reviewId) => {
    if (!(await Review.findOne({ _id: reviewId }))) {
        throw 'no such id exists';
    } else {
        await Review.findByIdAndDelete(reviewId);
    }
};
//bookRatingUpdate service recieves bookId and updates rating in book document in the DB with new avgRating
const bookRatingUpdate = async (bookId) => {
    try {
        //aggregate the rating of all reviews for the book with given bookId
        const stats = await Review.aggregate([
            {
                $match: { book_id: bookId },
            },
            {
                $group: {
                    _id: '$book_id',
                    avgRating: { $avg: '$rating' },
                },
            },
        ]);
        //updates the rating with new avgRating
        await Book.findByIdAndUpdate(bookId, {
            rating: stats[0].avgRating,
        });
    } catch (err) {
        throw err;
    }
};

const findReviewer = async (reviewId) => {
    try {
        return await Review.findById(reviewId, 'user_id');
    } catch (err) {
        throw err;
    }
};

module.exports = {
    addReview,
    bookRatingUpdate,
    updateReview,
    deleteReview,
    findReviewer,
};
