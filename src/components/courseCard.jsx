import React from "react";
import Stars from "./stars";

/*
  We create the course card with course object which we get it from App.js
*/
function courseCard({ course }) {
  return (
    <div className="course-card">
      <div>
        <img src={course.image} />
      </div>

      <div className="title">
        <h4>{course.title}</h4>
      </div>

      <p>{course.author}</p>

      <div className="rating">
        <span>{course.rating}</span>
        <Stars rating={course.rating} />
        <span> ({course.people})</span>
      </div>

      <div className="discount">
        <h5>E£{course.price}</h5>
        <h5>E£{course.discount}</h5>
      </div>
    </div>
  );
}

export default courseCard;
