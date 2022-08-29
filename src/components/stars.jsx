import React from "react";
import fullstar from "../Img/full-star.png";
import halfstar from "../Img/half-star.png";
import emptystar from "../Img/empty-star.png";

/*
    Rating stars: For every intger in rating we add a full star then:-
    * If the reminder float number is larger than 0.7 we add full star
    * If the reminder float number is between 0.3 and 0.7 we add half star
    * If the reminder float number is less than 0.3 we add empty star

*/
function stars({ rating }) {
  let allStars = [],
    idx = 0;

  while (rating > 0.7) {
    allStars.push(<img src={fullstar} key={++idx} alt="" />);
    rating--;
  }

  if (rating > 0.2) allStars.push(<img src={halfstar} key={++idx} alt="" />);

  while (allStars.length < 5)
    allStars.push(<img src={emptystar} key={++idx} alt="" />);

  return <div className="star">{allStars}</div>;
}

export default stars;
