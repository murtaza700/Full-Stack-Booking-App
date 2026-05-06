const Review = require('../models/Review');
const Service = require('../models/Service');

const createReview = async (req, res) => {
    try {
        const { serviceId, rating, comment } = req.body;

        const service = await Service.findById(serviceId);

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        const alreadyReviewed = await Review.findOne({
            user: req.user.id,
            service: serviceId,
        });

        if (alreadyReviewed) {
            return res.status(400).json({
                message: "You already reviewed this service",
            });
        }

        const review = await Review.create({
            user: req.user.id,
            service: serviceId,
            rating,
            comment,
        });

        const reviews = await Review.find({ service: serviceId });

        const avgRating =
            reviews.reduce((acc, item) => acc + item.rating, 0) /
            reviews.length;

        service.rating = avgRating;
        service.numReviews = reviews.length;

        await service.save();

        res.status(201).json({
            message: "Review added",
            review,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const getServiceReviews = async (req, res) => {
    try {
        const reviews = await Review.find({
            service: req.params.serviceId,
        })
            .populate("user", "name");

        res.json({
            count: reviews.length,
            reviews,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const updateReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }

        if (review.user.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        review.rating = rating || review.rating;
        review.comment = comment || review.comment;

        await review.save();

        res.json({
            message: "Review updated",
            review,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
};

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }

        if (review.user.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        const serviceId = review.service;

        await review.deleteOne();

        const reviews = await Review.find({ service: serviceId });

        let avgRating = 0;

        if (reviews.length > 0) {
            avgRating =
                reviews.reduce((acc, item) => acc + item.rating, 0) /
                reviews.length;
        }

        await Service.findByIdAndUpdate(serviceId, {
            rating: avgRating,
            numReviews: reviews.length,
        });

        res.json({
            message: "Review deleted",
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
};

module.exports = { createReview, getServiceReviews, updateReview, deleteReview };