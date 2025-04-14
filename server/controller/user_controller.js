const User = require("../models/user");
const Team = require("../models/teams");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION || "your-region",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

module.exports.create = async function (req, res) {
  try {
    User.uploadedReceipt(req, res, async function (err) {
      if (err) {
        console.log("**multer error", err);
        return res.status(500).json({ message: "File upload error" });
      }

      console.log("Uploaded file:", req.file);

      const filename = `${req.file.fieldname}-${
        req.body.phone
      }-${Date.now()}${path.extname(req.file.originalname)}`;
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: filename,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        // ACL: 'public-read'
      };

      try {
        // Upload file to S3
        const uploadResult = await s3.send(new PutObjectCommand(params));
        console.log("S3 Upload Success:", uploadResult);

        // Check for existing users
        const existingEmailUser = await User.findOne({ email: req.body.email });
        const existingPhoneUser = await User.findOne({ phone: req.body.phone });

        if (!existingEmailUser && !existingPhoneUser) {
          const new_user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            college: req.body.college,
            regNo: req.body.regNo,
            phone: req.body.phone,
            gender: req.body.gender,
            branch: req.body.branch,
            batch: req.body.batch,
            know: req.body.know,
            isAccommodation: req.body.isAccommodation,
            tshirtSize: req.body.tshirtSize,
            paymentMode: req.body.paymentMode,
            caCode: req.body.caCode || "",
            transactionId: req.body.transactionId,
            techmitiId: `TM25${req.body.phone}`,
            isPaymentInitilized: true,
            isPaymentVerified: false,
            paidAt: new Date(),
          });

          const savedUser = await new_user.save();

          // Assign S3 URL if file was uploaded
          if (req.file) {
            const receiptUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;
            savedUser.receipt = receiptUrl;
            await savedUser.save();
          }

          return res.status(200).json({
            data: { techmitiId: savedUser.techmitiId },
            message: "User created",
          });
        } else {
          // Delete uploaded file from S3 if user already exists
          await s3.send(
            new DeleteObjectCommand({
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: filename,
            })
          );

          return res
            .status(409)
            .json({ message: "Phone/Email already exists" });
        }
      } catch (s3Error) {
        console.error("S3 error:", s3Error);
        return res.status(500).json({ message: "Error uploading to S3" });
      }
    });
  } catch (err) {
    console.log("Error in creating user:", err);
    return res.status(500).json({ message: "Error in creating user" });
  }
};

module.exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Return user data and token
    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        techmitiId: user.techmitiId,
        college: user.college,
        branch: user.branch,
        isPaymentVerified: user.isPaymentVerified,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.logout = async function (req, res) {
  try {
    // Since we're using JWT, we don't need to do anything server-side
    // The client should remove the token from their storage
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
