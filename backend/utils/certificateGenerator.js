const generateCertificate = (studentName, courseTitle) => {
  // return a simple object or HTML string; implement real PDF in production
  return {
    text: `Certificate of Completion\n\nThis certifies that ${studentName} has completed the course: ${courseTitle}`,
    date: new Date()
  };
};

export default generateCertificate;
