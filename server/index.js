const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api' ,require('./routes'))


app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});


// Routes
// const pingRoutes = require("./src/routes/pingRoutes");
// const registrationRoutes = require("./src/routes/registrationRoutes");
// const authRoutes = require("./src/routes/authRoutes");
// const eventRoutes = require("./src/routes/eventRoutes");

// app.use("/api", pingRoutes);
// app.use("/api", registrationRoutes);
// app.use("/api", authRoutes);
// app.use("/api", eventRoutes);


mongoose.set('strictQuery', true);
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb+srv://moxie2k21:gxVG3Ood1kXNvfuJ@cluster0.pimdror.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => {
    console.log('Connected to the database ');
    app.listen(PORT, function (err) {
      if (err) {
        console.log(`Error in running the server :${err}`);
      }

      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to the database. ${err}`);
  });
