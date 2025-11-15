import express from "express";
import { createPayment, getPayments } from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Student creates a payment
router.post("/", protect, createPayment);

// Admin sees all payments
router.get("/", protect, getPayments);

export default router;
