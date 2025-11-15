import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  question: { type: String, required: true },
  options: [{ text: String, isCorrect: Boolean }],
}, { timestamps: true });

export default mongoose.model("Quiz", quizSchema);
