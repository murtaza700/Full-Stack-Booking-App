const express = require("express");
const router = express.Router();
const reviewControllers = require("../controllers/review.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

router.post("/", authMiddleware, roleMiddleware("user"), reviewControllers.createReview);
router.get("/:serviceId", reviewControllers.getServiceReviews);
router.put("/:id", authMiddleware, roleMiddleware("user"), reviewControllers.updateReview);
router.delete("/:id", authMiddleware, roleMiddleware("user"), reviewControllers.deleteReview);

module.exports = router;