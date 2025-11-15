import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizById, submitQuiz } from "../services/quizService";

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const data = await getQuizById(id);
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuiz();
  }, [id]);

  const handleChange = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = async () => {
    try {
      console.log("User Answers:", answers);
      const result = await submitQuiz(id, answers);
      alert("Quiz submitted successfully!");
      console.log("Result:", result);
    } catch (error) {
      alert("Failed to submit quiz!");
      console.error("Submit error:", error);
    }
  };

  if (loading) return <p>Loading quiz...</p>;
  if (!quiz) return <p>No quiz found</p>;

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions?.map((q) => (
        <div key={q._id} style={{ marginBottom: "15px" }}>
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt, i) => (
            <label key={i} style={{ display: "block" }}>
              <input
                type="radio"
                name={q._id}
                value={opt}
                checked={answers[q._id] === opt}
                onChange={() => handleChange(q._id, opt)}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
}

export default Quiz;
