import React, { useContext } from "react";
import "../../Styles/Course/learn.css";
import LearnRow from "./learnRow";
import { CourseDataContext } from "../../Context/contextCourseData";

function Learn() {
  const dataLearn = useContext(CourseDataContext);
  const data = dataLearn?.data?.learn;

  let allLearnRows = data?.map((el, idx) => (
    <LearnRow data={el} key={idx}></LearnRow>
  ));

  return (
    <div className="learn">
      <h2>What you'll learn</h2>
      <div className="learn-container row">{allLearnRows}</div>
    </div>
  );
}

export default Learn;
