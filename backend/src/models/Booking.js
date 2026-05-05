const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
        required: true
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    message: {
        type: String
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "completed"],
        default: 'pending'
    },
    totalPrice: {
        type: Number
    }
}, { timestamps: true });

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;