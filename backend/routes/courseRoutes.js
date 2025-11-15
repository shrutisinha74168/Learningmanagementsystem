// routes/courseRoutes.js
import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  enrollCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route: /api/courses
router
  .route("/")
  .get(getCourses) // Public route: Get all courses
  .post(protect, authorize("teacher", "admin"), createCourse); 

// Route: /api/courses/:id
router
  .route("/:id")
  .get(getCourseById) 
  .put(protect, authorize("teacher", "admin"), updateCourse) 
  .delete(protect, authorize("teacher", "admin"), deleteCourse); 

// Route: /api/courses/:id/enroll
router.post("/:id/enroll", protect, authorize("student"), enrollCourse);
router.route("/:id").get(getCourseById);
 // Protected: Enroll in course

export default router;
