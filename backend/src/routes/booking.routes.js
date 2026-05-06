const express = require("express");
const router = express.Router();
const bookingMiddleware = require("../controllers/booking.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, bookingMiddleware.createBooking);
router.get("/user", authMiddleware, bookingMiddleware.getUserBookings);
router.get("/provider", authMiddleware, bookingMiddleware.getProviderBookings);
router.put("/:id", authMiddleware, bookingMiddleware.updateBookingStatus);

module.exports = router;