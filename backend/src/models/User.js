const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'provider'],
        default: 'user'
    },
    avatar: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;