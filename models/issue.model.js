const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
        start_date: {
            type: Number,
            required: true,
            // Store in unix format
        },
        period: {
            type: Number,
            required: true,
            // Store number of months
        },
        renew_date: {
            type: Number,
            required: true,
            // Store in unix format
        },
    },
    {
        timestamps: true,
    }
);

let Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
