import React from "react";
import fullstar from "../../Images/full-star.png";
import halfstar from "../../Images/half-star.png";
import emptystar from "../../Images/empty-star.png";

/*
    Rating stars: For every intger in rating we add a full star then:-
    * If the reminder float number is larger than 0.7 we add full star
    * If the reminder float number is between 0.3 and 0.7 we add half star
    * If the reminder float number is less than 0.3 we add empty star

*/

const stars = function ({ rating }) {
  let allStars = [],
    idx = 0;

  while (rating > 0.7) {
    allStars.push(<img src={fullstar} key={++idx} alt="full star" />);
    rating--;
  }

  if (rating > 0.2)
    allStars.push(<img src={halfstar} key={++idx} alt="half star" />);

  while (allStars.length < 5)
    allStars.push(<img src={emptystar} key={++idx} alt="empty star" />);

  return <div className="star">{allStars}</div>;
};

export default stars;
