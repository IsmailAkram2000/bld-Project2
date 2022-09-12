import React from "react";
import { Link } from "react-router-dom";
import Stars from "./ratingStars";
import Pop from "./popup";
import { Popover, OverlayTrigger } from "react-bootstrap";

function CourseCard({ course, number }) {
  const popoverRight = (
    <Popover id="popover-positioned-right">
      <Pop />
    </Popover>
  );

  const popoverLeft = (
    <Popover id="popover-positioned-left">
      <Pop />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="hover"
      placement={number <= 3 ? "right" : "left"}
      overlay={number <= 3 ? popoverRight : popoverLeft}
    >
      <div className="course-card">
        <Link className="Link" to="/course">
          <div className="courseCardImg">
            <img src={course.image} alt="Course Image" />
          </div>

          <div className="title">
            <h4>{course.title}</h4>
          </div>

          <p className="author">{course.author}</p>

          <div className="rating d-flex">
            <span>{course.rating}</span>
            <Stars rating={course.rating} />
            <span> ({course.people})</span>
          </div>

          <div className="discount">
            <h5>E£{course.price}</h5>
            <h5>E£{course.discount}</h5>
          </div>
        </Link>
      </div>
    </OverlayTrigger>
  );
}

export default CourseCard;
