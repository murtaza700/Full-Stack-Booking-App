const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers/category.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require('../middlewares/role.middleware');

router.post("/", authMiddleware, roleMiddleware('admin'), categoryControllers.createCategory);
router.get("/", authMiddleware, categoryControllers.getCategories);
router.get("/:id", authMiddleware, categoryControllers.getSingleCategory);
router.put("/:id", authMiddleware, roleMiddleware("admin"), categoryControllers.updateCategory);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), categoryControllers.deleteCategory);

module.exports = router;