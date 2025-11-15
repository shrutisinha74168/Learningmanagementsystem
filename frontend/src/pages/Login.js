import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const successModalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);

      if (data?.token) {
        // ✅ Show Bootstrap success popup
        const modal = new window.bootstrap.Modal(successModalRef.current);
        modal.show();

        // Auto-close and redirect to homepage after 1.8 seconds
        setTimeout(() => {
          modal.hide();
          navigate("/"); // redirect to homepage
        }, 1800);
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
      {/* 🌈 Main Login Section */}
      <div
        className="d-flex align-items-center justify-content-center min-vh-100"
        style={{
          background:
            "linear-gradient(135deg, #ffccd2 0%, #ff9999 40%, #ff6666 100%)",
          animation: "floatingBg 6s ease-in-out infinite alternate",
        }}
      >
        <div
          className="card shadow-lg border-0 p-4 animate__animated animate__fadeInDown"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Logo + Title */}
          <div className="text-center mb-4">
            <div
              className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{
                backgroundColor: "#FFD700",
                width: "70px",
                height: "70px",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#b30000",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              L
            </div>
            <h2 className="fw-bold text-danger">Welcome Back!</h2>
            <p className="text-muted">Login to continue learning 🚀</p>
          </div>

          {/* Error Message */}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold text-danger">Email</label>
              <input
                type="email"
                className="form-control border-danger shadow-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: "10px", padding: "10px 15px" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold text-danger">
                Password
              </label>
              <input
                type="password"
                className="form-control border-danger shadow-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderRadius: "10px", padding: "10px 15px" }}
              />
            </div>

            <button
              type="submit"
              className="btn w-100 fw-semibold shadow mt-3"
              style={{
                backgroundColor: "#FFD700",
                color: "#b30000",
                borderRadius: "10px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              🔓 Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-muted mb-1">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="fw-semibold"
                style={{ color: "#e60000" }}
              >
                Register
              </a>
            </p>
            <a href="#" className="small text-secondary">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Background Animation */}
        <style>
          {`
            @keyframes floatingBg {
              0% { background-position: left top; }
              100% { background-position: right bottom; }
            }
          `}
        </style>
      </div>

      {/* ✅ Bootstrap Modal for Success Popup */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        ref={successModalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center border-0 shadow">
            <div className="modal-body p-5">
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#FFD700",
                  width: "70px",
                  height: "70px",
                  fontSize: "2rem",
                  color: "#b30000",
                }}
              >
                ✅
              </div>
              <h4 className="fw-bold text-danger">Login Successful!</h4>
              <p className="text-muted mb-0">Redirecting to Homepage...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
