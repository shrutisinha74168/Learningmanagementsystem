import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top py-3"
      style={{
        background:
          "linear-gradient(90deg, #8b0000 0%, #e60000 50%, #ff4d4d 100%)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="container">
        {/* 🔸 Logo & Brand */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-uppercase"
          to="/"
          style={{
            letterSpacing: "1px",
            fontSize: "1.4rem",
            color: "#FFD700",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center me-2 rounded-circle"
            style={{
              backgroundColor: "#FFD700",
              width: "40px",
              height: "40px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
            }}
          >
            <GraduationCap size={22} color="#8b0000" />
          </div>
          LMS
        </Link>

        {/* 🔹 Toggle (Mobile) */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔹 Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {[
              { path: "/courses", label: "Courses" },
               { path: "/contact", label: "Contact" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/login", label: "Login" },
            ].map((item) => (
              <li key={item.path} className="nav-item mx-lg-2">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-semibold text-light position-relative ${
                      isActive ? "active-link" : ""
                    }`
                  }
                  to={item.path}
                  style={{
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFD700";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* 🔸 Register Button */}
            <li className="nav-item mt-2 mt-lg-0">
              <NavLink
                to="/register"
                className="btn fw-semibold px-4 py-2 ms-lg-3 border-0"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#8b0000",
                  borderRadius: "50px",
                  transition: "all 0.3s ease-in-out",
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
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
