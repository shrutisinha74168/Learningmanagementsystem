import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "../services/courseService";
import { Spinner, Button, Badge, Modal } from "react-bootstrap";
import "animate.css";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error("Error fetching course details:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [id]);

  const handleEnroll = () => setShowModal(true);

  const handleProceedToPayment = () => {
    setShowModal(false);
    // ✅ navigate to payment page with course data
    navigate("/payment", { state: { course } });
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
      </div>
    );

  if (!course)
    return <p className="text-center mt-5 text-muted">Course not found.</p>;

  const discount = course.price > 999 ? "20% OFF" : "10% OFF";
  const discountedPrice =
    course.price > 999
      ? (course.price * 0.8).toFixed(0)
      : (course.price * 0.9).toFixed(0);

  return (
    <div
      className="min-vh-100 py-5"
      style={{ background: "linear-gradient(145deg, #ffe6e6, #fff0f0)" }}
    >
      <div className="container animate__animated animate__fadeIn">
        <div className="row g-5 align-items-center">
          {/* Course Image */}
          <div className="col-md-6 text-center">
            <img
              src={course.image || "https://via.placeholder.com/500x300"}
              alt={course.title}
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                border: "5px solid #fff",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Course Info */}
          <div className="col-md-6">
            <h1 className="fw-bold text-danger mb-3">{course.title}</h1>
            <Badge bg="warning" text="dark" className="mb-3 fs-6 px-3 py-2 shadow-sm">
              {discount}
            </Badge>

            <p className="text-muted mb-4 fs-5">{course.description}</p>

            <ul className="list-unstyled mb-4">
              <li>🎓 <strong>Instructor:</strong> {course.instructor || "John Doe"}</li>
              <li>⏰ <strong>Duration:</strong> {course.duration || "Self-paced"}</li>
              <li>🌎 <strong>Language:</strong> {course.language || "English"}</li>
              <li>📅 <strong>Updated:</strong> {course.updatedAt?.substring(0, 10) || "Recently"}</li>
            </ul>

            <div className="d-flex align-items-center gap-3 mb-4">
              <h3 className="fw-bold text-success mb-0">₹{discountedPrice}</h3>
              <h5 className="text-muted text-decoration-line-through mb-0">₹{course.price}</h5>
              <Badge bg="danger" className="px-3 py-2 shadow-sm">Limited Offer</Badge>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <Button
                variant="danger"
                size="lg"
                className="px-4 rounded-pill fw-semibold shadow"
                onClick={handleEnroll}
              >
                Enroll Now 🚀
              </Button>
              <Button
                variant="outline-danger"
                size="lg"
                className="px-4 rounded-pill fw-semibold"
                onClick={() => navigate("/courses")}
              >
                Back to Courses
              </Button>
            </div>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="mt-5">
          <h4 className="fw-bold text-danger mb-4 text-center">What you'll learn</h4>
          <div className="row g-4">
            {[
              "Master core concepts step by step",
              "Get lifetime access to all updates",
              "Receive a verified certificate after completion",
              "Access premium resources & live sessions",
            ].map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="p-4 text-center bg-white rounded-4 shadow-sm h-100 hover-effect">
                  <span style={{ fontSize: "1.5rem" }}>✔️</span>
                  <p className="mt-3 mb-0">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enroll Confirmation Modal */}
<Modal
  show={showModal}
  onHide={() => setShowModal(false)}
  centered
  className="payment-modal"
>
  <Modal.Header closeButton className="bg-danger text-white">
    <Modal.Title>🎓 Enroll in {course.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body className="bg-light">
    <div className="text-center mb-3">
      <h5 className="fw-semibold text-dark">
        Select your preferred payment method
      </h5>
      <p className="text-muted small">
        Secure payment powered by trusted gateways 🔒
      </p>
    </div>

    {/* Payment Options */}
    <div className="d-flex flex-column gap-3">
      {[
        { name: "PhonePe", icon: "📱", color: "#5f259f" },
        { name: "Google Pay", icon: "💰", color: "#4285F4" },
        { name: "Credit / Debit Card", icon: "💳", color: "#ff4d4d" },
        { name: "EMI (Installments)", icon: "🪙", color: "#008060" },
      ].map((method, index) => (
        <div
          key={index}
          className={`p-3 rounded-3 shadow-sm d-flex align-items-center justify-content-between payment-option ${
            course.selectedMethod === method.name ? "selected" : ""
          }`}
          style={{
            background: "white",
            cursor: "pointer",
            border: "1px solid #ddd",
            transition: "all 0.3s ease",
          }}
          onClick={() =>
            setCourse((prev) => ({ ...prev, selectedMethod: method.name }))
          }
        >
          <div className="d-flex align-items-center gap-3">
            <span style={{ fontSize: "1.8rem" }}>{method.icon}</span>
            <strong style={{ color: method.color }}>{method.name}</strong>
          </div>
          {course.selectedMethod === method.name && (
            <span className="text-success fw-bold">✔️</span>
          )}
        </div>
      ))}
    </div>

    <hr className="my-4" />

    {/* Summary Section */}
    <div className="text-center">
      <h6 className="text-muted mb-2">Amount to Pay:</h6>
      <h3 className="fw-bold text-success mb-0">₹{discountedPrice}</h3>
      <small className="text-secondary">
        (Incl. of all taxes and platform fee)
      </small>
    </div>
  </Modal.Body>

  <Modal.Footer className="d-flex justify-content-between">
    <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
      Cancel ❌
    </Button>
    <Button
      variant="success"
      className="fw-semibold"
      onClick={handleProceedToPayment}
      disabled={!course.selectedMethod}
    >
      {course.selectedMethod
        ? `Pay via ${course.selectedMethod} 💳`
        : "Select Payment Method"}
    </Button>
  </Modal.Footer>

  <style>
    {`
      .payment-option:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        border-color: #dc3545;
      }
      .payment-option.selected {
        border: 2px solid #dc3545 !important;
        background: #fff6f6;
      }
    `}
  </style>
</Modal>

      </div>

      {/* Hover effect */}
      <style>
        {`
          .hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

export default CourseDetail;
