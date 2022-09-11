import React, { useState, useContext } from "react";
import { CourseDataContext } from "../../Context/contextCourseData";
import ReviewCard from "./reviewCard";
import "../../Styles/Course/reviews.css";

function Reviews() {
  const [option, setOption] = useState(1);

  const data = useContext(CourseDataContext)?.data?.reviews;

  const filterChange = (event) => {
    setOption(event.target.value);
  };

  function compare(a, b) {
    if (option === "1") return 0;
    if (option === "2") {
      if (a.stars > b.stars) {
        return -1;
      }
      if (a.stars < b.stars) {
        return 1;
      }
      return 0;
    }
    if (option === "3") {
      if (a.stars > b.stars) {
        return 1;
      }
      if (a.stars < b.stars) {
        return -1;
      }
      return 0;
    }
    if (option === "4") {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      return 0;
    }
  }

  const allReviews = data?.sort(compare)?.map((el, idx) => {
    return <ReviewCard element={el} key={idx} number={idx + 1}></ReviewCard>;
  });

  return (
    <div className="reviews">
      <div className="review-search">
        <h5 className="mb-4">Reviews</h5>
        <div className="d-inline">
          <input type="text" placeholder="Search reviews" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <select id="reviews-rating" onChange={filterChange}>
          <option value="1">All rating</option>
          <option value="2">Highest Rating</option>
          <option value="3">Lowest Rating</option>
          <option value="4">Latest</option>
        </select>
      </div>

      <div className="review">{allReviews}</div>
    </div>
  );
}

export default Reviews;
