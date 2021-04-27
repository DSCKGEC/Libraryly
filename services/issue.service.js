const Issue = require('../models/issue.model');
const User = require('../models/user.model');
const Book = require('../models/book.model');

const NewIssue = async (issueBody) => {
    var book = await Book.findById(issueBody.book);
    if (!(await User.findById(issueBody.user))) {
        throw 'User Id does not Exist.';
    } else if (!book) {
        throw 'Book Id does not Exist.';
    } else if (book.inventory === 0) {
        throw 'Sorry! No books are available.';
    } else {
        try {
            var issue = await Issue.create(issueBody);
            book.inventory--;
            await book.save();
            return issue;
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
    var issue = await Issue.findById(id);
    if (!issue) {
        throw 'Issue not found';
    } else if (issue.approved === false) {
        throw 'The issue is not approved';
    } else if (issue.returned === true) {
        throw 'Book already returned';
    } else {
        try {
            var book = await Book.findById(issue.book);
            book.inventory++;
            await book.save();
            issue.returned = true;
            await issue.save();
        } catch (err) {
            throw err;
        }
    }
};

const RenewBook = async (id, start_time, period) => {
    var issue = await Issue.findById(id);
    if (!issue) {
        throw 'Issue not found';
    } else if (issue.approved === false) {
        throw 'The issue is not approved';
    }
    // else if (issue.returned === true) {
    //     throw 'Book already returned';
    // }
    else {
        try {
            var issuenew = {};
            issuenew.type = 'renew';
            issuenew.user = issue.user;
            issuenew.book = issue.book;
            issuenew.start_date = start_time;
            issuenew.period = period;
            var newissue = await Issue.create(issuenew);
            issue.returned = true;
            await issue.save();
            return newissue;
        } catch (err) {
            throw err;
        }
    }
};

const approveIssue = async (id) => {
    var issue = await Issue.findById(id);
    if (!issue) {
        throw 'Issue not found';
    } else if (issue.approved === true) {
        throw 'Already approved';
    } else {
        try {
            issue.approved = true;
            await issue.save();
        } catch (err) {
            throw err;
        }
    }
};
module.exports = {
    NewIssue,
    getIssueById,
    ReturnBook,
    RenewBook,
    approveIssue,
};
