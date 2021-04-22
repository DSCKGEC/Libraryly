const Book = require('../models/book.model');

const AddBook = async (bookBody) => {
    try {
        return await Book.create(bookBody);
    } catch (error) {
        throw error;
    }
};

const FindBook = async (id) => {
    const book = await Book.findOne({ _id: id });
    return book;
};

const UpdateBook = async (id, bookBody) => {
    try {
        const updated_book = await Book.findOneAndUpdate(
            { _id: id },
            bookBody,
            { new: true }
        );
        return updated_book;
    } catch (err) {
        throw err;
    }
};

const DeleteBook = async (id) => {
    if (!(await Book.findOne({ _id: id }))) {
        throw 'no such id exists';
    } else {
        await Book.findByIdAndDelete(id);
    }
};

const FindBookByField = async (field, query) => {
    var re = new RegExp(query, 'i');
    var query_obj = {};
    query_obj[field] = re;
    const book = await Book.find(query_obj);
    return book;
};

module.exports = {
    AddBook,
    FindBook,
    UpdateBook,
    DeleteBook,
    FindBookByField,
};
