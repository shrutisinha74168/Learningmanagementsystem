import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: { type: String, default: "General" },
    image: { type: String, default: "https://via.placeholder.com/400x200" },
    price: { type: Number, default: 499 },
    videoUrl: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
