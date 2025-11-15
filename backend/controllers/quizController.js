import Quiz from "../models/Quiz.js";
import Course from "../models/Course.js";

// Create quiz for a course (teacher)
export const createQuiz = async (req, res) => {
  try {
    const { courseId, question, options } = req.body; 
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (!course.teacher.equals(req.user._id) && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }
    const quiz = await Quiz.create({ course: courseId, question, options });
    course.quizzes.push(quiz._id);
    await course.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get quizzes for a course
export const getQuizzesByCourse = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ course: req.params.courseId });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get quiz by ID (new)
export const getQuizByIdController = async (req, res) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Submit quiz answer (simple scoring)
export const submitQuiz = async (req, res) => {
  try {
    const { quizId, selectedIndex } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    const isCorrect = quiz.options[selectedIndex] && quiz.options[selectedIndex].isCorrect;
    res.json({ correct: !!isCorrect });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
