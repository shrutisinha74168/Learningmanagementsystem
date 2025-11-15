import React, { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import CourseCard from "../components/CourseCard";
import { Spinner } from "react-bootstrap";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCourses();
        setCourses(data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (courses.length === 0) {
    return <p className="text-center mt-5">No courses available right now.</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-danger mb-4">All Courses</h2>
      <div className="row g-4">
        {courses.map((c) => (
          <div key={c._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <CourseCard course={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
