import React from "react";
import fullstar from "../Img/full-star.png";
import halfstar from "../Img/half-star.png";

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
        <div className="star">
          <img src={fullstar} alt="" />
          <img src={fullstar} alt="" />
          <img src={fullstar} alt="" />
          <img src={fullstar} alt="" />
          <img src={halfstar} alt="" />
        </div>
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
