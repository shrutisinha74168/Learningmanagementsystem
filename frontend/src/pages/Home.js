import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Laptop,
  Clock,
  PlayCircle,
} from "lucide-react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function Home() {
  const { courses } = useContext(CourseContext);

  return (
    <div className="bg-light">
      {/* 🌊 Hero Banner with background image */}
      <section
        className="position-relative text-light text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>

        {/* Banner content */}
        <div className="container position-relative z-2 animate__animated animate__fadeIn">
          <h1 className="display-4 fw-bold mb-3">
            Learn, Grow, and Achieve with{" "}
            <span className="text-warning">LMS Platform</span>
          </h1>
          <p className="lead mb-4">
            Access thousands of expert-led courses anytime, anywhere.  
            Build the future you deserve 🚀
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/register"
              className="btn btn-warning text-danger fw-semibold px-4 py-2 rounded-pill shadow"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 Features */}
      <section className="py-5 text-center container">
        <h2 className="fw-bold text-danger mb-4">Why Choose LMS?</h2>
        <p className="text-muted mb-5">
          Discover what makes us different from the rest — learning made simple,
          engaging, and effective.
        </p>
        <div className="row g-4">
          {[
            {
              icon: <Users size={42} className="text-danger mb-3" />,
              title: "Expert Instructors",
              text: "Learn from world-class mentors and industry experts.",
            },
            {
              icon: <Laptop size={42} className="text-danger mb-3" />,
              title: "Flexible Learning",
              text: "Study at your own pace — anywhere, anytime.",
            },
            {
              icon: <Award size={42} className="text-danger mb-3" />,
              title: "Verified Certificates",
              text: "Earn certificates to showcase your achievements.",
            },
            {
              icon: <Clock size={42} className="text-danger mb-3" />,
              title: "Lifetime Access",
              text: "Revisit your courses anytime you want.",
            },
          ].map((f, i) => (
            <div className="col-md-3 col-sm-6" key={i}>
              <div
                className="p-4 bg-white rounded-4 shadow-sm h-100"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(220,53,69,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                {f.icon}
                <h5 className="fw-bold">{f.title}</h5>
                <p className="text-muted small">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎓 Featured Courses */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold text-danger mb-5">
            Popular Courses
          </h2>
          <div className="row g-4 justify-content-center">
            {courses && courses.length > 0 ? (
              courses.slice(0, 3).map((course) => (
                <div key={course._id} className="col-md-4 col-sm-6">
                  <div
                    className="card border-0 shadow-lg h-100"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(220,53,69,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 5px 15px rgba(0,0,0,0.1)";
                    }}
                  >
                    <CourseCard course={course} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">
                Courses loading or not available yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 📈 Learning Stats */}
      <section
        className="py-5 text-light text-center"
        style={{
          background:
            "linear-gradient(135deg, #b30000 0%, #ff3333 100%)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold text-warning mb-4">Our Global Impact</h2>
          <div className="row g-4">
            {[
              { count: "50K+", label: "Active Students" },
              { count: "1200+", label: "Courses Available" },
              { count: "400+", label: "Expert Mentors" },
              { count: "30+", label: "Countries Reached" },
            ].map((stat, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="p-4 bg-transparent border border-light rounded-4">
                  <h3 className="fw-bold text-warning">{stat.count}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold text-danger mb-5">What Our Students Say</h2>
          <div className="row g-4">
            {[
              {
                name: "Aarav Sharma",
                text: "The LMS platform made learning fun! I love how interactive the content is.",
              },
              {
                name: "Riya Mehta",
                text: "Flexible and powerful. Got certified and promoted within months!",
              },
              {
                name: "Kabir Patel",
                text: "Best UI and easy access. It really feels like a professional classroom online.",
              },
            ].map((t, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-light text-dark rounded-4 shadow-sm p-4 h-100">
                  <PlayCircle size={32} className="text-danger mb-3" />
                  <p className="fst-italic">“{t.text}”</p>
                  <h6 className="fw-bold mt-3 text-danger">{t.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section
        className="py-5 text-center text-light"
        style={{
          background:
            "linear-gradient(135deg, #ff3333 0%, #b30000 100%)",
        }}
      >
        <h2 className="fw-bold mb-3 text-warning">
          Start your learning adventure today!
        </h2>
        <p className="mb-4">
          Join thousands of learners who are upgrading their careers every day.
        </p>
        <Link
          to="/register"
          className="btn btn-warning text-danger fw-semibold px-5 py-2 rounded-pill shadow"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
