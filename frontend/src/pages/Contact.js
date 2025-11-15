import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import "animate.css";

function Contact() {
  return (
    <div className="bg-light">
      {/* 🏞️ Banner Section */}
      <section
        className="position-relative text-light text-center d-flex align-items-center justify-content-center"
        style={{
          height: "60vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-relative z-2 animate__animated animate__fadeInDown">
          <h1 className="fw-bold text-warning display-5">Get in Touch</h1>
          <p className="lead text-light">
            We'd love to hear from you. Reach out for queries, feedback, or collaboration.
          </p>
        </div>
      </section>

      {/* 📞 Contact Info + Form Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left: Contact Info */}
            <div className="col-lg-5 animate__animated animate__fadeInLeft">
              <h2 className="fw-bold text-danger mb-4">Contact Information</h2>
              <p className="text-muted mb-4">
                Whether you have a question about our courses, pricing, or anything else — 
                our team is ready to answer all your questions.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <MapPin className="text-danger me-3" size={22} />
                  <span>123 Learning Street, Mumbai, India</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Phone className="text-danger me-3" size={22} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Mail className="text-danger me-3" size={22} />
                  <span>support@lmsacademy.com</span>
                </li>
                <li className="d-flex align-items-center">
                  <Clock className="text-danger me-3" size={22} />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Right: Contact Form */}
            <div className="col-lg-7 animate__animated animate__fadeInRight">
              <div className="card border-0 shadow-lg p-4 rounded-4">
                <h4 className="fw-bold text-danger mb-3">Send Us a Message</h4>
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="What’s this about?"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="5"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning text-danger fw-semibold px-5 py-2 rounded-pill shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section className="mt-5 position-relative">
        <div className="text-center mb-3">
          <h2 className="fw-bold text-danger animate__animated animate__fadeInDown">
            Find Us on Map
          </h2>
        </div>

        <div
          className="ratio ratio-16x9 shadow-lg animate__animated animate__fadeInUp"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          <iframe
            title="LMS Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610036474!2d72.74109963363907!3d19.0821978395118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63991b6a5cf%3A0x4f1d4d7a7f2ef6a5!2sMumbai!5e0!3m2!1sen!2sin!4v1675673772521!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            style={{ border: 0, width: "100%", height: "450px" }}
          ></iframe>
        </div>
      </section>

      {/* Small Hover + Animation Styling */}
      <style>
        {`
          .form-control:focus {
            border-color: #ffcc00;
            box-shadow: 0 0 5px rgba(255, 204, 0, 0.6);
          }
          button:hover {
            transform: scale(1.05);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Contact;
