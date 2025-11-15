import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  if (!course) {
    return <h3>No course selected for payment</h3>;
  }

  const handlePayment = () => {
    alert(`Payment successful for ${course.title}`);
    navigate(`/courses/${course._id}`); // After payment, go to course detail
  };

  return (
    <div className="container text-center mt-5">
      <h2>Checkout</h2>
      <p><strong>Course:</strong> {course.title}</p>
      <p><strong>Price:</strong> ₹{course.price}</p>
      <button className="btn btn-danger" onClick={handlePayment}>
        Pay Now 💳
      </button>
    </div>
  );
}

export default Payment;
