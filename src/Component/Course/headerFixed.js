import React, { useState, useEffect } from "react";
import "../../Styles/Course/headerFixed.css";

function HeaderFixed() {
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    const curHeight = window.pageYOffset;
    setHeight(curHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={height < 300 ? "headerFixedNormal" : "fixed"}>
      <h1>Learn Python: The Complete Python Programming Course</h1>
      <div className="rating rating-s">
        <p className="rating-points">4.4 </p>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
        <p className="header-link pa">
          <a>(3.116 ratings)</a>
        </p>
        <p> 18,867 students</p>
      </div>
    </div>
  );
}

export default HeaderFixed;
