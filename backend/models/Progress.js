import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  completedLessons: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Progress", progressSchema);
