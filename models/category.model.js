const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

let Category = mongoose.model('Category', categorySchema);

module.exports = Category;
