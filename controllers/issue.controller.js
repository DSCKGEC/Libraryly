const issueService = require('../services/issue.service');

const renderNewIssue = (req, res) => {
    // TODO: Render New Issue Page
    res.status(201).send('New Issue');
};

const newIssue = async (req, res) => {
    try {
        // receives the created issue document as object

        const result = await issueService.NewIssue(req.body);
        // TODO: redirect to add book success
        res.status(200).send(result);
    } catch (err) {
        // TODO: redirect to add book with error in partials

        //res.redirect('/users/register/' + err);
        res.status(500).send('failed ' + err);
    }
};

const renderIssue = async (req, res) => {
    var id = req.params.id;
    const issue = await issueService.getIssueById(id);
    if (!issue) {
        // TODO: render not found page
        res.status(404).send('Not Found');
    } else {
        // TODO: render issue
        res.status(200).send(issue);
    }
};

const returnBook = async (req, res) => {
    var id = req.params.id;
    try {
        await issueService.ReturnBook(id);
        // TODO:
        res.status(200).send('Return success');
    } catch (err) {
        // TODO:
        res.status(404).send(err);
    }
};

const renewBook = async (req, res) => {
    var id = req.params.id;
    var period = req.body.period;
    var start_time = req.body.start_time;
    try {
        var newissue = await issueService.RenewBook(id, start_time, period);
        // TODO:
        res.status(200).send(newissue);
    } catch (err) {
        // TODO:
        res.status(404).send(err);
    }
};
module.exports = {
    renderNewIssue,
    newIssue,
    renderIssue,
    returnBook,
    renewBook,
};
