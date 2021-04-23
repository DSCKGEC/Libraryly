const Issue = require('../models/issue.model');
const User = require('../models/user.model');
const Book = require('../models/book.model');

const NewIssue = async (issueBody) => {
    if (!(await User.findById(issueBody.user))) {
        throw 'User Id does not Exist.';
    } else if (!(await Book.findById(issueBody.book))) {
        throw 'Book Id does not Exist.';
    } else {
        try {
            return await Issue.create(issueBody);
        } catch (error) {
            throw error;
        }
    }
};

const getIssueById = async (id) => {
    const issue = Issue.findById(id);
    return issue;
};

const ReturnBook = async (id) => {
    try {
        await Issue.findOneAndUpdate({ _id: id }, { returned: true });
    } catch (err) {
        throw err;
    }
};
module.exports = {
    NewIssue,
    getIssueById,
    ReturnBook,
};
