import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate(`/courses/${course._id}`); // 👈 sirf detail page
  };

  return (
    <motion.div
      className="card shadow border-0 h-100"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ borderRadius: "20px" }}
    >
      <img
        src={course.image || "https://via.placeholder.com/400x200"}
        className="card-img-top"
        alt={course.title}
        style={{
          height: "200px",
          objectFit: "cover",
          borderRadius: "20px 20px 0 0",
        }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-danger">{course.title}</h5>
        <p className="card-text text-muted small">{course.category}</p>
        <p className="text-dark fw-semibold">
          ₹{course.price}{" "}
          <span className="text-decoration-line-through text-secondary">
            ₹{Math.round(course.price * 1.4)}
          </span>{" "}
          <span className="text-success">
            ({Math.floor(Math.random() * 30) + 10}% OFF)
          </span>
        </p>
        <button
          onClick={handleViewCourse}
          className="btn btn-danger w-100 fw-semibold"
          style={{
            borderRadius: "10px",
            transition: "0.3s ease",
          }}
        >
          View Course 🚀
        </button>
      </div>
    </motion.div>
  );
}

export default CourseCard;
