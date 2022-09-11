import React, { useContext } from "react";
import { CourseDataContext } from "../../Context/contextCourseData";
import SectionContent from "./sectionContent";
import "../../Styles/Course/content.css";

function Content() {
  const data = useContext(CourseDataContext).data;

  const allSections = data?.sections?.map((el, idx) => {
    return <SectionContent element={el} key={idx} />;
  });

  return (
    <React.Fragment>
      <div className="content-details">
        <h4>Course content </h4>
        <p>15 sections • 146 lectures • 14h 42m total length</p>
      </div>

      <div className="content">{allSections}</div>

      <div className="requirements">
        <h2>Requirements</h2>
        <li>Macintosh (OSX)/ Windows(Vista and higher) Machine</li>
        <li>Internet Connection</li>
      </div>
    </React.Fragment>
  );
}

export default Content;
