const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const RECEIPT_PATH = path.posix.join('/uploads', 'receipt');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    techmitiId: {
      type: String,
    },
    college: {
      type: String,
      required: true,
    },
    
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    know: {
      type: String,
      required: true,
    },
    isAccommodation: {
      type: Boolean,
      required: true,
    },
    tshirtSize: {
      type: String,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    caCode: {
      type: String,
    },
    receipt: {
      type: String,
    },
    isReceiptDeleted: {
      type: Boolean,
      default: false
    },
    transactionId: {
      type: String,
    },
  
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
      },
    ],
    
    isPaymentInitilized: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isPaymentVerified: {
      type: Boolean,
      default: false,
    },
    verifiedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.memoryStorage();

//statics methods

userSchema.statics.uploadedReceipt = multer({ storage: storage }).single(
  'receipt'
);
userSchema.statics.receiptPath = RECEIPT_PATH;

const User = mongoose.model('User', userSchema);
module.exports = User;
