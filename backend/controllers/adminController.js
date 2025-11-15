import User from "../models/User.js";
import Course from "../models/Course.js";

// 🧠 Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name email role createdAt"); // sirf zaroori fields
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error while fetching users" });
  }
};

// 🗑️ Delete a user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error while deleting user" });
  }
};

// ➕ Add new course
export const addCourse = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    // basic validation
    if (!title || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = new Course({
      title,
      description,
      price,
      category,
    });

    await course.save();
    res.status(201).json({ message: "Course added successfully", course });
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).json({ message: "Server error while adding course" });
  }
};

// 🗑️ Delete a course (⚡ ye missing tha)
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Server error while deleting course" });
  }
};
