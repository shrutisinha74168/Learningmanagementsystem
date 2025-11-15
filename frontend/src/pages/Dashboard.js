import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle2,
  PlayCircle,
  BarChart3,
} from "lucide-react";
import "animate.css";

function Dashboard() {
  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #ffe6e6 0%, #fff5f5 100%)",
      }}
    >
      <div className="container py-5">
        {/* 🎯 Header */}
        <div className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="fw-bold text-danger mb-2">Welcome Back, Learner!</h1>
          <p className="text-muted fs-5">
            Track your progress, achievements, and continue learning with ease.
          </p>
        </div>

        {/* 📊 Summary Cards */}
        <div className="row g-4 mb-5">
          {[
            {
              title: "Total Courses",
              value: 12,
              icon: <BookOpen size={36} />,
              color: "linear-gradient(135deg, #ff4d4d, #b30000)",
            },
            {
              title: "Completed",
              value: 8,
              icon: <CheckCircle2 size={36} />,
              color: "linear-gradient(135deg, #ff6666, #cc0000)",
            },
            {
              title: "Certificates",
              value: 5,
              icon: <Award size={36} />,
              color: "linear-gradient(135deg, #ff9933, #ff3300)",
            },
            {
              title: "Progress",
              value: "67%",
              icon: <TrendingUp size={36} />,
              color: "linear-gradient(135deg, #ff1a1a, #800000)",
            },
          ].map((item, idx) => (
            <div className="col-md-3 col-sm-6" key={idx}>
              <div
                className="card border-0 text-white text-center shadow-lg h-100 animate__animated animate__zoomIn"
                style={{
                  background: item.color,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(220,53,69,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div className="card-body">
                  <div className="mb-3">{item.icon}</div>
                  <h6 className="fw-semibold">{item.title}</h6>
                  <h3 className="fw-bold">{item.value}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📈 Progress Bar */}
        <div className="mb-5 animate__animated animate__fadeInUp">
          <h4 className="fw-bold text-danger mb-3">Your Learning Progress</h4>
          <div className="progress" style={{ height: "25px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated fw-bold"
              style={{
                width: "67%",
                background: "linear-gradient(90deg, #ff3333, #ff6666)",
              }}
            >
              67%
            </div>
          </div>
        </div>

        {/* 🕒 Recent Activity */}
        <div className="mb-5 animate__animated animate__fadeInUp">
          <h4 className="fw-bold text-danger mb-3">Recent Activity</h4>
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <ul className="list-group list-group-flush">
              {[
                "✅ Completed “React Basics” Course",
                "🏆 Earned Certificate: “JavaScript Advanced”",
                "🚀 Started “Bootstrap 5 Crash Course”",
              ].map((activity, i) => (
                <li
                  key={i}
                  className="list-group-item py-3"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#fff" : "#fdf1f1",
                  }}
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ⚡ Quick Actions */}
        <div className="text-center animate__animated animate__fadeInUp">
          <h4 className="fw-bold text-danger mb-3">Quick Actions</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-danger btn-lg shadow-sm d-flex align-items-center gap-2">
              <PlayCircle size={22} /> Start New Course
            </button>
            <button className="btn btn-outline-danger btn-lg d-flex align-items-center gap-2">
              <Award size={22} /> View Certificates
            </button>
            <button className="btn btn-outline-dark btn-lg d-flex align-items-center gap-2">
              <BarChart3 size={22} /> View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
