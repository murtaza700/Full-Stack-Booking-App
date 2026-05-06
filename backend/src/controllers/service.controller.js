const Service = require('../models/Service');
const Category = require('../models/Category');
const uploadFile = require('../config/uploadFile');

const getServices = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, search, sort } = req.query;

        let query = {};

        if (category) {
            query.category = category;
        }

        if (minPrice || maxPrice) {
            query.price = {
                $gte: Number(minPrice) || 0,
                $lte: Number(maxPrice) || 100000,
            };
        }

        if (search) {
            query.title = {
                $regex: search,
                $options: "i",
            };
        }

        let servicesQuery = Service.find(query)
            .populate("category", "name")
            .populate("provider", "name");

        if (sort === "low") {
            servicesQuery = servicesQuery.sort({ price: 1 });
        } else if (sort === "high") {
            servicesQuery = servicesQuery.sort({ price: -1 });
        } else {
            servicesQuery = servicesQuery.sort({ createdAt: -1 });
        }

        const services = await servicesQuery;

        res.json({
            count: services.length,
            services,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const getSingleService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
            .populate("category", "name")
            .populate("provider", "name email");

        if (!service) {
            return res.status(404).json({
                message: "Service not found",
            });
        }

        res.json({ service });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const createService = async (req, res) => {
    try {
        const { title, description, price, category } = req.body;
        const file = req.file;

        const cat = await Category.findById(category);
        if (!cat) {
            return res.status(404).json({ message: "Category not found" });
        }

        const result = await uploadFile(file.buffer.toString('base64'));

        const service = await Service.create({
            title,
            description,
            price,
            category,
            provider: req.user.id,
            image: result.url
        });

        res.status(201).json({
            message: "Service created",
            service,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                message: "Service not found",
            });
        }

        if (service.provider.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        const { title, description, price, category } = req.body;

        service.title = title || service.title;
        service.description = description || service.description;
        service.price = price || service.price;
        service.category = category || service.category;

        if (req.file) {
            const imagekit = req.app.get("imagekit");

            const uploaded = await imagekit.upload({
                file: req.file.buffer,
                fileName: req.file.originalname,
            });

            service.image = uploaded.url;
        }

        await service.save();

        res.json({
            message: "Service updated",
            service,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                message: "Service not found",
            });
        }

        if (service.provider.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        await service.deleteOne();

        res.json({
            message: "Service deleted",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

module.exports = { getServices, getSingleService, createService, updateService, deleteService };