function roleMiddleware(...allowedRole) {
    return function (req, res, next) {

        if (!allowedRole.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        next();
    };
}

module.exports = roleMiddleware;