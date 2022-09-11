import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard from "./courseCard";
import { CoursesContext } from "../../Context/contextData";

function CoursesCursor(curTab) {
  // *** Search Params***
  const [searchParams] = useSearchParams();
  let searchText = searchParams.get("search");
  if (searchText == null) searchText = "";

  // *** Data ***
  const allData = useContext(CoursesContext);

  // *** Current Tab
  curTab = curTab.currentCourses.tab;

  function compute(d, len = 5) {
    let all = [],
      sm = [];

    for (let i = 0; i < d.length; i++) {
      sm.push(d[i]);
      if (i % len === len - 1 || i === d.length - 1) {
        if (!all.length) {
          all.push(
            <div className="carousel-item active" key={i}>
              <div className="row">{sm}</div>
            </div>
          );
        } else {
          all.push(
            <div className="carousel-item" key={i}>
              <div className="row">{sm}</div>
            </div>
          );
        }
        sm = [];
      }
    }
    return all;
  }

  const comp = allData.data
    .filter((el) => {
      const title = el.title.toLowerCase(),
        txt = searchText.toLowerCase();
      return el.tab === curTab && title.indexOf(txt) != -1;
    })
    .map((el, idx) => {
      return <CourseCard course={el} key={idx} />;
    });

  const all = compute(comp);

  let drawing = [],
    aws = [],
    py = [],
    ex = [],
    wb = [],
    js = [],
    ds = [];

  if (curTab === "Drawing") drawing = all;
  if (curTab === "python") py = all;
  if (curTab === "excel") ex = all;
  if (curTab === "web") wb = all;
  if (curTab === "AWS") aws = all;
  if (curTab === "JS") js = all;
  if (curTab === "DS") ds = all;

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Python"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {py}
          </div>

          <div
            className="tab-pane fade"
            id="Excel"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {ex}
          </div>

          <div
            className="tab-pane fade"
            id="Web"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {wb}
          </div>

          <div
            className="tab-pane fade"
            id="JS"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {js}
          </div>

          <div
            className="tab-pane fade"
            id="DS"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {ds}
          </div>

          <div
            className="tab-pane fade"
            id="AWS"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {aws}
          </div>

          <div
            className="tab-pane fade"
            id="Drawing"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {drawing}
          </div>
        </div>
      </div>

      <button
        className="slider-btn-left carousel-control-prev slider-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="slider-btn-right carousel-control-next slider-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CoursesCursor;
