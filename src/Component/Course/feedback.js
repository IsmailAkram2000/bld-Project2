import React from "react";
import "../../Styles/Course/feedback.css";

function feedback() {
  return (
    <div className="feedback">
      <h5>Student feedback</h5>
      <div className="d-flex feedback-review">
        <div className="rating-down">
          <h1>4.4</h1>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
          </div>
          <p>Course rating</p>
        </div>

        <div className="progress-rating">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "34%" }}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "37%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "15%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "3%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "2%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div>
          <div className="d-flex mt-2">
            <div className="star-right">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
              <a className="preview-a">43%</a>
            </div>
          </div>

          <div className="d-flex">
            <div className="star-right">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
              <a className="preview-a">37%</a>
            </div>
          </div>

          <div className="d-flex">
            <div className="star-right">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
              <a className="preview-a">15%</a>
            </div>
          </div>

          <div className="d-flex">
            <div className="star-right">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
              <a className="preview-a">3%</a>
            </div>
          </div>

          <div className="d-flex">
            <div className="star-right">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
              <a className="preview-a">2%</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default feedback;
