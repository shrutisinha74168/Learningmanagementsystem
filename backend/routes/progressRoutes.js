import express from "express";
import { getProgress, updateProgress } from "../controllers/progressController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:courseId", protect, authorize("student"), getProgress);
router.put("/:courseId", protect, authorize("student"), updateProgress);

export default router;
