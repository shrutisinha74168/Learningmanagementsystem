import React, { createContext, useState, useEffect } from "react";
import { getCourses } from "../services/courseService";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const data = await getCourses();
      setCourses(data || []);
    }
    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};
