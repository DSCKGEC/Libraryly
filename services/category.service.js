const Category = require('../models/category.model');

const AddCategory = async (categoryBody) => {
    try {
        return await Category.create(categoryBody);
    } catch (error) {
        throw error;
    }
};

const AllCategory = async () => {
    const cats = await Category.find({});
    return cats;
};

module.exports = {
    AddCategory,
    AllCategory,
};
