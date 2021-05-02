const bookService = require('../services/book.service');
const helper = require('../utils/helper');

const renderAddBook = (req, res) => {
    // TODO: Render Add Book Page
    res.status(200).render('books/add_book');
};

const addBook = async (req, res) => {
    req.body._id = helper.getRandomId(10);
    try {
        // receives the created book document as object

        const result = await bookService.AddBook(req.body);
        // TODO: redirect to add book success
        res.status(200).send(result);
    } catch (err) {
        // TODO: redirect to add book with error in partials

        //res.redirect('/users/register/' + err);
        res.status(500).send('failed ' + err);
    }
};

const renderBook = async (req, res) => {
    var book_id = req.params.id;
    const book = await bookService.FindBook(book_id);
    if (!book) {
        // TODO: redirect to book not found page
        res.status(404).send('Book Not Found.');
    } else {
        // TODO:render the book details
        res.status(200).send(book);
    }
};

const renderEditBook = async (req, res) => {
    var book_id = req.params.id;
    const book = await bookService.FindBook(book_id);
    if (!book) {
        // TODO: redirect to book not found page
        res.status(404).send('Book Not Found.');
    } else {
        // TODO:render the edit book details
        res.status(201).send(book);
    }
};

const editBook = async (req, res) => {
    var book_id = req.params.id;
    try {
        const result = await bookService.UpdateBook(book_id, req.body);
        // TODO: redirect to edit book success
        res.status(200).send(result);
    } catch (err) {
        // TODO : rendirect to error page
        res.status(500).send('Error ' + err);
    }
};

const deleteBook = async (req, res) => {
    var book_id = req.params.id;
    try {
        await bookService.DeleteBook(book_id);
        // TODO: redirect to delete success
        res.status(200).send('Delete Success');
    } catch (err) {
        // TODO: redirect to delete error
        res.status(500).send('Error ' + err);
    }
};

const renderSearchBook = async (req, res) => {
    var query = req.params.query;
    var field = req.params.field;
    var found_books = await bookService.FindBookByField(field, query);
    if (found_books.length == 0) {
        //TODO: render no match found.
        res.status(404).send('No Match Found');
    } else {
        // TODO: render all books found
        res.status(200).send(found_books);
    }
};

const renderAllBooks = async (req, res) => {
    var books = await bookService.AllBooks();
    if (!books) {
        res.status(404).send('No Books Found');
    } else {
        res.status(200).send(books);
    }
};
module.exports = {
    renderAddBook,
    addBook,
    renderBook,
    renderEditBook,
    editBook,
    deleteBook,
    renderSearchBook,
    renderAllBooks,
};
