import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3 position-relative"
      style={{
        background: "linear-gradient(135deg, #b30000 0%, #ff3333 60%, #ff4d4d 100%)",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Animated Background Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05), transparent 60%)",
          animation: "moveGradient 10s infinite alternate ease-in-out",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-between align-items-start text-center text-md-start">
          {/* 🏫 Left Section */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-warning">LMS Academy</h4>
            <p className="small text-light opacity-75">
              Empowering learners worldwide — gain new skills, certifications,
              and career-ready knowledge with our modern learning platform.
            </p>
          </div>

          {/* 🔗 Center Section */}
          <div className="col-md-4 mb-4 text-center">
            <h6 className="fw-semibold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-light text-decoration-none hover-link">Home</a></li>
              <li><a href="/courses" className="text-light text-decoration-none hover-link">Courses</a></li>
              <li><a href="/dashboard" className="text-light text-decoration-none hover-link">Dashboard</a></li>
              <li><a href="/contact" className="text-light text-decoration-none hover-link">Contact</a></li>
            </ul>
          </div>

          {/* 🌐 Right Section */}
          <div className="col-md-4 mb-4 text-center text-md-end">
            <h6 className="fw-semibold text-uppercase mb-3">Connect With Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Facebook size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Instagram size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Twitter size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                <Linkedin size={22} />
              </a>
              <a href="mailto:support@lmsacademy.com" className="icon-link">
                <Mail size={22} />
              </a>
            </div>
            <p className="small opacity-75 mb-0">
              © {new Date().getFullYear()} <span className="fw-semibold text-warning">LMS Academy</span>
            </p>
            <p className="small opacity-75 mb-0">
              Crafted with ❤️ for passionate learners
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #ffcc00, #ff6666)",
        }}
      ></div>

      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .icon-link {
            color: #fff;
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .icon-link:hover {
            transform: translateY(-4px) scale(1.1);
            color: #ffcc00;
          }
          .hover-link {
            transition: color 0.3s ease;
          }
          .hover-link:hover {
            color: #ffcc00;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
