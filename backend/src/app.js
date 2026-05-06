const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const imagekit = require('./config/uploadFile');

const authRoutes = require('./routes/auth.routes');
const servicesRoutes = require('./routes/service.routes');
const bookingsRoutes = require('./routes/booking.routes');
const reviewsRoutes = require('./routes/review.routes');
const categoriesRoutes = require('./routes/category.routes');

const app = express();

app.set("imagekit", imagekit);

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json('Booking API is Live!');
});

app.use('/api/auth', authRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/categories", categoriesRoutes);

module.exports = app;