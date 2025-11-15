import express from "express";
import {
  createQuiz,
  getQuizzesByCourse,
  getQuizByIdController,  // naya controller import
  submitQuiz,
} from "../controllers/quizController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create quiz (teachers/admins)
router.post("/", protect, authorize("teacher", "admin"), createQuiz);

// Get all quizzes for a course
router.get("/course/:courseId", protect, getQuizzesByCourse);

// Get quiz by ID (naya route)
router.get("/:id", protect, getQuizByIdController);

// Submit quiz answers
router.post("/submit", protect, submitQuiz);

export default router;
