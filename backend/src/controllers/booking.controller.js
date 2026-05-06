const Booking = require('../models/Booking');
const Service = require('../models/Service');

const createBooking = async (req, res) => {
    try {
        const { serviceId, bookingDate, message } = req.body;

        const service = await Service.findById(serviceId);

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        let imageUrl = "";

        if (req.file) {
            const imagekit = req.app.get("imagekit");

            const uploaded = await imagekit.upload({
                file: req.file.buffer,
                fileName: req.file.originalname,
            });

            imageUrl = uploaded.url;
        }

        const booking = await Booking.create({
            user: req.user.id,
            service: serviceId,
            provider: service.provider,
            bookingDate,
            message,
            image: imageUrl,
            totalPrice: service.price,
        });

        res.status(201).json({
            message: "Booking created successfully",
            booking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .populate("service", "title price")
            .populate("provider", "name");

        res.json({
            count: bookings.length,
            bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const getProviderBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ provider: req.user.id })
            .populate("user", "name email")
            .populate("service", "title price");

        res.json({
            count: bookings.length,
            bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        if (booking.provider.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        booking.status = status;

        await booking.save();

        res.json({
            message: "Booking updated",
            booking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

const deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        if (booking.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await booking.deleteOne();

        res.json({ message: "Booking deleted" });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
};

module.exports = { createBooking, getUserBookings, getProviderBookings, updateBookingStatus, deleteBooking };