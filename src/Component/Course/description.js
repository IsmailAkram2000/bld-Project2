import React, { useContext } from "react";
import { CourseDataContext } from "../../Context/contextCourseData";
import "../../Styles/Course/description.css";

function Description() {
  const data = useContext(CourseDataContext)?.data;

  const p = document.querySelector(".paragraph1");
  const showMore1 = document.querySelector(".show-more-1");

  const toggle = () => {
    p?.classList.toggle("pr-1");
    if (showMore1?.textContent === "Show more")
      showMore1.textContent = "Show less";
    else showMore1.textContent = "Show more";
  };

  return (
    <div className="description">
      <h2>Description</h2>
      <p className="paragraph1 pr-1">{data?.description}</p>
      <a className="show-more show-more-1" onClick={toggle}>
        Show more
      </a>
    </div>
  );
}

export default Description;
