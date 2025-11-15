import Payment from "../models/Payment.js";
import { v4 as uuidv4 } from "uuid"; // to generate dummy transaction IDs

// Create a dummy payment
export const createPayment = async (req, res) => {
  try {
    const { userId, courseId, amount } = req.body;

    const payment = await Payment.create({
      user: userId,
      course: courseId,
      amount,
      status: "success", // Always success for dummy
      transactionId: uuidv4(),
    });

    res.status(201).json({
      message: "Payment successful (dummy)",
      payment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all payments (admin use)
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("user course", "name email title");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
