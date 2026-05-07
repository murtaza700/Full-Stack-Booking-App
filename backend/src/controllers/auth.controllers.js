const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Register = async (req, res) => {
    const { email, password, username, role = 'user' } = req.body;

    if (!email || !password || !username) {
        return res.status(401).json({
            success: false,
            message: 'All Fields are Required!'
        });
    }

    const user = await User.findOne({ email });

    if (user) {
        return res.status(401).json({
            success: false,
            message: 'User Already Exist!'
        });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPass,
        role
    });

    await newUser.save();

    return res.status(401).json({
        success: true,
        message: 'Registered Successfuly!',
        user: {
            id: newUser._id,
            name: newUser.username,
            email: newUser.email,
            role: newUser.role
        }
    });
}

const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({
            success: false,
            message: 'All Fields are Required'
        });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'Invalid Credentials!'
        });
    }

    const passCompare = await bcrypt.compare(password, user.password);

    if (!passCompare) {
        return res.status(401).json({
            success: false,
            message: 'Invalid Credentials!'
        });
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    return res.status(200).json({
        success: true,
        message: 'Logged In Successfuly!',
        user: {
            id: user._id,
            name: user.username,
            email: user.email,
            role: user.role
        }
    });
}

const Logout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};

const Me = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json({
            success: true,
            user
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Server Error!'
        });
    }
}

module.exports = { Register, Login, Logout, Me };