const Category = require("../models/Category");

const createCategory = async (req, res) => {
    try {
        const { name, icon } = req.body;

        const existing = await Category.findOne({ name });

        if (existing) {
            return res.status(400).json({
                message: "Category already exists",
            });
        }

        const category = await Category.create({
            name
        });

        res.status(201).json({
            message: "Category created successfully",
            category
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });

        res.json({
            count: categories.length,
            categories,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const getSingleCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        res.json({ category });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const { name, icon } = req.body;

        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        category.name = name || category.name;
        category.icon = icon || category.icon;

        await category.save();

        res.json({
            message: "Category updated",
            category,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
};

const deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        await category.deleteOne();

        res.json({
            message: "Category deleted",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
};

module.exports = { createCategory, getCategories, getSingleCategory, updateCategory, deleteCategory };