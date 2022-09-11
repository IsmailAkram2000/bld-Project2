import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Courses from "./courses";
import "../../Styles/Home/tabs.css";

function Tabs() {
  const [curTab, setTab] = useState("python");

  const navigate = useNavigate();

  const changeTab = (cur) => {
    navigate("/");
    setTab(cur);
  };

  return (
    <React.Fragment>
      <ul className="nav nav-tabs tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="python-tab"
            data-bs-toggle="tab"
            data-bs-target="#Python"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => {
              changeTab("python");
            }}
          >
            Python
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="excel-tab"
            data-bs-toggle="tab"
            data-bs-target="#Excel"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => {
              changeTab("excel");
            }}
          >
            Excel
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="web-tab"
            data-bs-toggle="tab"
            data-bs-target="#Web"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            onClick={() => {
              changeTab("web");
            }}
          >
            Web Development
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="js-tab"
            data-bs-toggle="tab"
            data-bs-target="#JS"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            onClick={() => {
              changeTab("JS");
            }}
          >
            JavaScript
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="ds-tab"
            data-bs-toggle="tab"
            data-bs-target="#DS"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            onClick={() => {
              changeTab("DS");
            }}
          >
            Data Science
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="aws-tab"
            data-bs-toggle="tab"
            data-bs-target="#AWS"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            onClick={() => {
              changeTab("AWS");
            }}
          >
            AWS Certification
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="drawing-tab"
            data-bs-toggle="tab"
            data-bs-target="#Drawing"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            onClick={() => {
              changeTab("Drawing");
            }}
          >
            Drawing
          </button>
        </li>
      </ul>
      <Courses tab={curTab} />
    </React.Fragment>
  );
}

export default Tabs;
