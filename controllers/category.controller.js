const categoryService = require('../services/category.service');

const renderNewCategory = (req, res) => {
    // TODO: render add category
    //res.status(200).send('New Category');
    res.status(200).render('categories/add_category')
};

const newCategory = async (req, res) => {
    try {
        // receives the created category document as object
        const result = await categoryService.AddCategory(req.body);
        // TODO: redirect to add catogory success
        res.status(200).send(result);
    } catch (err) {
        // TODO: redirect to add category with error in partial
        res.status(500).send('failed ' + err);
    }
};

const renderAllCategory = async (req, res) => {
    const cats = await categoryService.AllCategory();
    if (!cats) {
        res.status(404).send('No Categories Found');
    } else {
        res.status(200).send(cats);
    }
};

module.exports = {
    renderNewCategory,
    renderAllCategory,
    newCategory,
};
