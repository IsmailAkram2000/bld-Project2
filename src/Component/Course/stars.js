import React from "react";

function stars({ rating }) {
  let allStars = [],
    idx = 0;

  while (rating > 0.7) {
    allStars.push(<i className="fa-solid fa-star" key={idx++}></i>);
    rating--;
  }

  if (rating > 0.2)
    allStars.push(
      <i className="fa-regular fa-star-half-stroke" key={idx++}></i>
    );

  while (allStars.length < 5)
    allStars.push(<i className="fa-regular fa-star" key={idx++}></i>);

  return <React.Fragment>{allStars}</React.Fragment>;
}

export default stars;
