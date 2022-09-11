import React, { useContext } from "react";
import "../../Styles/Course/instructors.css";
import { CourseDataContext } from "../../Context/contextCourseData";

function Instructors() {
  const data = useContext(CourseDataContext).data;

  const pr2 = document.querySelector(".pr-2");
  const showMore2 = document.querySelector(".show-more2");

  const toggle = () => {
    pr2.classList.toggle("pr-2");
    if (showMore2.textContent == "Show more")
      showMore2.textContent = "Show less";
    else showMore2.textContent = "Show more";
  };

  return (
    <div className="instructors">
      <div className="instructors-details">
        <h2>Instructors</h2>
        <h4>{data?.instructors?.name}</h4>
        <p>{data?.instructors?.postion}</p>
      </div>

      <div className="d-flex">
        <div>
          <img
            src="https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg"
            alt="Instructor Image"
            className="instructors-img"
          />
        </div>

        <div className="p-4">
          <div className="d-flex instructors-row">
            <i className="fa-sharp fa-solid fa-star"></i>
            <p>&nbsp; 4.4 Instructor Rating</p>
          </div>

          <div className="d-flex instructors-row">
            <i className="fa-sharp fa-solid fa-certificate"></i>
            <p>&nbsp; 73,895 Reviews</p>
          </div>

          <div className="d-flex instructors-row">
            <i className="fa-solid fa-person"></i>
            <p>&nbsp; &nbsp;892,679 Students</p>
          </div>

          <div className="d-flex instructors-row">
            <i className="fa-solid fa-circle-play"></i>
            <p>&nbsp; 16 Courses</p>
          </div>
        </div>
      </div>

      <div className="instructors-details">
        <p className="pr-2"> {data?.instructors?.details} </p>

        <a className="show-more show-more2" onClick={toggle}>
          Show more
        </a>
      </div>

      <div className="instructors-details">
        <h4>The Codex</h4>
        <p>Teaching Python through Projects</p>
      </div>

      <div className="d-flex">
        <div>
          <img
            src="https://img-c.udemycdn.com/user/200_H/52310762_220a.jpg"
            alt="Instructor Image"
            className="instructors-img"
          />
        </div>

        <div className="p-4">
          <div className="d-flex instructors-row">
            <i className="fa-sharp fa-solid fa-star"></i>
            <p>&nbsp; 4.4 Instructor Rating</p>
          </div>

          <div className="d-flex instructors-row">
            <i className="fa-sharp fa-solid fa-certificate"></i>
            <p>&nbsp; 73,895 Reviews</p>
          </div>

          <div className="d-flex instructors-row">
            <i className="fa-solid fa-person"></i>
            <p>&nbsp; &nbsp;892,679 Students</p>
          </div>

          <div className="d-flex instructors-row">
            <i className="fa-solid fa-circle-play"></i>
            <p>&nbsp; 16 Courses</p>
          </div>
        </div>
      </div>

      <div className="instructors-details">
        <p className="pr-3"> {data?.instructors?.companyDetails} </p>
        <p className="mt-5">{data?.instructors?.joinUs}</p>
      </div>
    </div>
  );
}

export default Instructors;
