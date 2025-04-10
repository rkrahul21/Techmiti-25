const Registration = require("../models/Registration");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = generateToken(user._id);

    // Return user data (excluding password) and token
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        _id: user._id,
        email: user.email,
        phone: user.phone,
        fullName: user.fullName,
        techmitiId: user.techmitiId,
        isVerified: user.isVerified,
        college: user.college,
        branch: user.branch,
        rollNumber: user.rollNumber,
        batch: user.batch,
        tshirtSize: user.tshirtSize,
        accommodation: user.accommodation,
        paymentMethod: user.paymentMethod,
        paymentStatus: user.isVerified ? "Verified" : "Pending",
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Error during login",
      error: error.message,
    });
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    // User is already attached to req by the middleware
    const user = req.user;

    res.status(200).json({
      success: true,
      data: {
        user: {
          _id: user._id,
          email: user.email,
          phone: user.phone,
          fullName: user.fullName,
          techmitiId: user.techmitiId,
          isVerified: user.isVerified,
          college: user.college,
          branch: user.branch,
          rollNumber: user.rollNumber,
          batch: user.batch,
          tshirtSize: user.tshirtSize,
          accommodation: user.accommodation,
          paymentMethod: user.paymentMethod,
          paymentStatus: user.isVerified ? "Verified" : "Pending",
        },
      },
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching profile",
      error: error.message,
    });
  }
};

module.exports = {
  login,
  getUserProfile,
};
