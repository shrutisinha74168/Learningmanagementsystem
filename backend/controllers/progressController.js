import Progress from "../models/Progress.js";
import Course from "../models/Course.js";

// Get or create progress
export const getProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    let prog = await Progress.findOne({ student: req.user._id, course: courseId });
    if (!prog) {
      const course = await Course.findById(courseId);
      prog = await Progress.create({
        student: req.user._id,
        course: courseId,
        totalLessons: course ? (course.videoUrl ? 1 : 0) : 0
      });
    }
    res.json(prog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update progress (e.g., when a lesson watched)
export const updateProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { completedLessons, score } = req.body;
    const prog = await Progress.findOneAndUpdate(
      { student: req.user._id, course: courseId },
      { $set: { completedLessons, score } },
      { new: true, upsert: true }
    );
    res.json(prog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
