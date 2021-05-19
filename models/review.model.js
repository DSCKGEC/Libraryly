const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        user: {
            type: String,
            required: true,
            ref: 'User',
        },
        book: {
            type: String,
            required: true,
            ref: 'Book',
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

let Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
