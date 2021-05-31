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
//allow a user to review only one time for a particular book
reviewSchema.index({ user_id: 1, book_id: 1 }, { unique: true });

reviewSchema.pre('find', function (next) {
    this.populate('user_id', 'name picture_url');
    next();
});

let Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
