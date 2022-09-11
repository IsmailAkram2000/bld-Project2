import React from "react";
import CoursesText from "./coursesText";
import CoursesCursor from "./coursesCarousel";
import "../../Styles/Home/courses.css";

function courses(curTab) {
  return (
    <section className="courses">
      <CoursesText />
      <CoursesCursor currentCourses={curTab} />
    </section>
  );
}

export default courses;
