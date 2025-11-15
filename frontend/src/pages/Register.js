import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(name, email, password);
      if (data?.token) {
        navigate("/dashboard");
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div
      className="d-flex flex-column min-vh-100 justify-content-between align-items-center"
      style={{
        background:
          "linear-gradient(135deg, #ffb3c3ff 0%, #ff9999 40%, #ff6666 100%)",
        animation: "floatingBg 6s ease-in-out infinite alternate",
      }}
    >
      {/* 🔥 Registration Card */}
      <div
        className="card shadow-lg border-0 p-4 mt-5"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "20px",
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Create Account 🔥</h2>
          <p className="text-muted">Join and start learning today!</p>
        </div>

        {/* Error Message */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-danger">Name</label>
            <input
              type="text"
              className="form-control border-danger shadow-sm"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                borderRadius: "10px",
                padding: "10px 15px",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-danger">Email</label>
            <input
              type="email"
              className="form-control border-danger shadow-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                borderRadius: "10px",
                padding: "10px 15px",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-danger">
              Password
            </label>
            <input
              type="password"
              className="form-control border-danger shadow-sm"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                borderRadius: "10px",
                padding: "10px 15px",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-danger w-100 fw-semibold shadow mt-3"
            style={{
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            🚀 Register
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-4">
          <p className="text-muted mb-1">
            Already have an account?{" "}
            <a href="/login" className="text-danger fw-semibold">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* 🌍 Footer */}
      <footer className="text-center text-light py-3 w-100 mt-4">
        <div className="container">
          <p className="mb-0 small">
            © {new Date().getFullYear()} <strong>LMS Platform</strong> — Learn.
            Grow. Achieve.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
