const express = require('express');
const authController = require('../controllers/auth.controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/login', authController.Login);
router.post('/register', authController.Register);
router.post('/logout', authMiddleware, authController.Logout);
router.get('/me', authMiddleware, authController.Me);

module.exports = router;