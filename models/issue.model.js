const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema(
    {
        user: {
            type: String,
            required: true,
        },
        book: {
            type: String,
            required: true,
        },
        start_date: {
            type: Number,
            required: true,
            // Store in unix format
        },
        period: {
            type: Number,
            required: true,
            // Store number of days
        },
        type: {
            type: String,
            default: 'First Issue',
        },
        approved: {
            type: Boolean,
            default: false,
        },
        approvedby: {
            type:String
        },
        returned: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

let Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
