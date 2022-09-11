import React from "react";
import Stars from "./stars";

function ReviewCard({ element, number }) {
  function first() {
    if (number != 1) return <hr />;
    else return <React.Fragment></React.Fragment>;
  }

  return (
    <React.Fragment>
      {first()}
      <div className="d-flex reviewer">
        <div>
          <button>{element?.short}</button>
        </div>
        <div className="review-stars">
          <h6>{element?.name}</h6>
          <div className="review-stars-i d-flex">
            <Stars rating={element?.stars} />
            <p>&nbsp; &nbsp; {element?.period}</p>
          </div>
        </div>
      </div>

      <h5>{element?.comment}</h5>

      <div className="helpful">
        <p>Was this review helpful?</p>
        <div className="d-flex">
          <button>
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button>
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <a className="helpful-a">Report</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReviewCard;
