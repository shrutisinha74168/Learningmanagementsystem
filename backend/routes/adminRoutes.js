import express from "express";
import {
  getAllUsers,
  deleteUser,
  addCourse,
  deleteCourse,
} from "../controllers/adminController.js";

const router = express.Router();

// 🧑‍💼 Get All Users
router.get("/users", getAllUsers);

// ❌ Delete User by ID
router.delete("/users/:id", deleteUser);

// ➕ Add a New Course
router.post("/courses", addCourse);

// 🗑️ Delete Course by ID
router.delete("/courses/:id", deleteCourse);

export default router;
