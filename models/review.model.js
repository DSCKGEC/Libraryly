const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
            ref: 'User',
        },
        book_id: {
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

reviewSchema.pre('find', function (next) {
    this.populate('user_id', 'name picture_url');
    next();
});

let Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
