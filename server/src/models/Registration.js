const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  leader: {
    techmitiId: { type: String, required: true },
    name: { type: String, required: true },
  },
  members: [
    {
      techmitiId: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
  submittedBy: { type: String, required: true },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const registrationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    college: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    rollNumber: {
      type: String,
      required: true,
      trim: true,
    },
    batch: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      required: true,
      trim: true,
    },
    tshirtSize: {
      type: String,
      required: true,
      enum: ["S", "M", "L", "XL", "XXL"],
    },
    accommodation: {
      type: Boolean,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["Through Campus Ambassador", "Through Bank Account"],
    },
    caCode: {
      type: String,
      trim: true,
    },
    transactionId: {
      type: String,
      required: true,
      trim: true,
    },
    paymentScreenshot: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    techmitiId: {
      type: String,
      unique: true,
    },
    teams: [teamSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Registration", registrationSchema);
