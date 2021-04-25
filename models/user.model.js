const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            // to be validated in frontend
        },
        picture_url: {
            type: String,
            default: 'none',
            // saved in uploads/
        },
        phone: {
            type: Number,
            unique: true,
            // to be validated in frontend
        },
        address: {
            city: String,
            state: String,
            zip_code: String,
            street_address: String,
            // to be validated in frontend
        },
        username: {
            type: String,
            unique: true,
            // alphanumeric username
        },
        status: {
            type: String,
            default: 'unverified',
            // unverified, verified, banned
        },
        group: {
            type: String,
            default: 'member',
            // admin, librarian, member
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified || !this.isNew) {
        next();
    } else this.isModified('password');
    if (this.password)
        this.password = await bcrypt.hash(String(this.password), 12);
    next();
});

let User = mongoose.model('User', userSchema);

module.exports = User;
