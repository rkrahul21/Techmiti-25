const Registration = require("../models/Registration");
const cloudinary = require("../config/cloudinary");
const bcrypt = require("bcryptjs");
const fs = require("fs").promises;

const register = async (req, res) => {
  try {
    const {
      email,
      phone,
      password,
      name,
      gender,
      college,
      branch,
      rollNo,
      batch,
      know,
      isAccommodation,
      tshirtSize,
      paymentMode,
      caCode,
      transactionId,
    } = req.body;

    // Validate required fields
    const requiredFields = [
      "email",
      "phone",
      "password",
      "name",
      "gender",
      "college",
      "branch",
      "rollNo",
      "batch",
      "know",
      "isAccommodation",
      "tshirtSize",
      "paymentMode",
      "transactionId",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Validate enums
    if (!["male", "female", "other"].includes(gender.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "Gender must be one of: male, female, other",
      });
    }

    if (!["S", "M", "L", "XL", "XXL"].includes(tshirtSize.toUpperCase())) {
      return res.status(400).json({
        success: false,
        message: "T-shirt size must be one of: S, M, L, XL, XXL",
      });
    }

    if (!["ca", "bank"].includes(paymentMode.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "Payment mode must be one of: ca, bank",
      });
    }

    // Check if user already exists
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Validate and upload file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Payment receipt is required",
      });
    }

    // Upload file to Cloudinary
    let paymentScreenshotUrl = "";
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "techmiti_payments",
        resource_type: "auto",
      });
      paymentScreenshotUrl = result.secure_url;

      // Clean up temporary file
      await fs.unlink(req.file.path);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error uploading payment receipt",
        error: error.message,
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Convert accommodation from string to boolean
    const accommodation =
      isAccommodation === "true" || isAccommodation === true;

    // Convert payment mode
    const paymentMethod =
      paymentMode.toLowerCase() === "ca"
        ? "Through Campus Ambassador"
        : "Through Bank Account";

    // Generate a unique TechMITi ID
    const techmitiId = `TM${Date.now().toString().slice(-6)}${Math.floor(
      Math.random() * 1000
    )
      .toString()
      .padStart(3, "0")}`;

    // Create new registration
    const registration = new Registration({
      email,
      phone,
      password: hashedPassword,
      fullName: name,
      gender: gender.toLowerCase(),
      college,
      branch,
      rollNumber: rollNo,
      batch,
      source: know,
      tshirtSize: tshirtSize.toUpperCase(),
      accommodation,
      paymentMethod,
      caCode,
      transactionId,
      paymentScreenshot: paymentScreenshotUrl,
      techmitiId,
    });

    await registration.save();

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        email: registration.email,
        fullName: registration.fullName,
        techmitiId: registration.techmitiId,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Error during registration",
      error: error.message,
    });
  }
};

module.exports = {
  register,
};
