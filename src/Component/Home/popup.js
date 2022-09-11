import React from "react";
import "../../Styles/Home/popup.css";

function pop() {
  return (
    <div className="pop">
      <h4>Learn Python: The Complete Python Programming Course</h4>
      <p className="pop-p1">Updated September 2015</p>
      <p className="pop-p2">14.5 total hours . All levels . Subtitle</p>
      <p className="pop-p3">
        Learn A-Z everything about Python, from the basics, to advanced topics
        like Python GUI, Python Data Analysis, and more!
      </p>
      <p className="course-detail">
        <i className="fa-solid fa-check"></i> &nbsp; Create their own Python
        Programs
      </p>
      <p className="course-detail">
        <i className="fa-solid fa-check"></i> &nbsp; Become an experienced
        Python Programmer
      </p>
      <p className="course-detail">
        <i className="fa-solid fa-check"></i> &nbsp; Parse the Web and Create
        their own Games
      </p>
      <div className="d-flex">
        <button className="buy-course d-block">Buy now</button>
        <button className="heart">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default pop;
