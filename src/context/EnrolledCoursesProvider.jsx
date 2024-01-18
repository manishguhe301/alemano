import { createContext, useState } from 'react';

export const EnrolledCoursesContext = createContext();

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const addCourse = (course) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
  };

  const removeCourse = (courseName, instructorName) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.filter(
        (course) =>
          course.course_name !== courseName ||
          course.instructor !== instructorName
      )
    );
  };

  const toggleCourseCompletion = (courseName, instructorName) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.course_name === courseName &&
        course.instructor === instructorName
          ? { ...course, completed: !course.completed }
          : course
      )
    );
  };

  return (
    <EnrolledCoursesContext.Provider
      value={{
        enrolledCourses,
        addCourse,
        removeCourse,
        toggleCourseCompletion,
      }}
    >
      {children}
    </EnrolledCoursesContext.Provider>
  );
};
