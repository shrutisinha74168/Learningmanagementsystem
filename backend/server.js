import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import courseRoutes from "./routes/courseRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"; // ✅ Admin routes import

dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Failed: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes); // ✅ Admin routes added

// Default Route
app.get("/", (req, res) => {
  res.send("🎯 LMS Backend API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
