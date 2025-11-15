import Quiz from "../models/Quiz.js"; 
import Course from "../models/Course.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";

// Create course (teacher only)
export const createCourse = async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    let videoUrl = "";
    // if video file is uploaded (frontend sends file as base64 or via multipart)
    if (req.body.videoBase64) {
      const upload = await cloudinary.uploader.upload(req.body.videoBase64, {
        resource_type: "video",
        folder: "lms/courses"
      });
      videoUrl = upload.secure_url;
    }
    const course = await Course.create({
      title, description, category, price,
      videoUrl, teacher: req.user._id
    });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("teacher", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get course by id
export const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id.trim(); // ensure clean id
    const course = await Course.findOne({ _id: courseId })
      .populate("teacher", "name email")
      .populate("quizzes");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    console.error("Error fetching course by ID:", err);
    res.status(500).json({ message: err.message });
  }
};

// Enroll student (simple push)
export const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (course.students.includes(req.user._id)) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    course.students.push(req.user._id);
    await course.save();
    res.json({ message: "Enrolled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update course (teacher only)
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (!course.teacher.equals(req.user._id) && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    const { title, description, category, price } = req.body;
    course.title = title ?? course.title;
    course.description = description ?? course.description;
    course.category = category ?? course.category;
    course.price = price ?? course.price;
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (!course.teacher.equals(req.user._id) && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    await course.remove();
    res.json({ message: "Course removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
