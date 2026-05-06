const express = require("express");
const multer = require('multer');
const router = express.Router();
const serviceControllers = require("../controllers/service.controller");

const upload = multer({
    storage: multer.memoryStorage()
});

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

router.get("/", serviceControllers.getServices);
router.get("/:id", serviceControllers.getSingleService);
router.post("/", authMiddleware, roleMiddleware('provider'), upload.single("image"), serviceControllers.createService);
router.put("/:id", authMiddleware, roleMiddleware('provider', 'admin'), serviceControllers.updateService);
router.delete("/:id", authMiddleware, roleMiddleware('admin'), serviceControllers.deleteService);

module.exports = router;