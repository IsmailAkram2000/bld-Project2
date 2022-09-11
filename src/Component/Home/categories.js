import React from "react";
import categoty1 from "../../Images/Categories1.jpg";
import categoty2 from "../../Images/Categories2.jpg";
import categoty3 from "../../Images/Categories3.jpg";
import categoty4 from "../../Images/Categories4.jpg";
import categoty5 from "../../Images/Categories5.jpg";
import categoty6 from "../../Images/Categories6.jpg";
import categoty7 from "../../Images/Categories7.jpg";
import categoty8 from "../../Images/Categories8.jpg";

function categories() {
  return (
    <React.Fragment>
      <h2 className="mt-4 ms-5">Top categories</h2>

      <div className="categories container mt-5">
        <div className="row align-item-center">
          <div className="col col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty1} alt="Design" width="90%" />
            <h5>Design</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty2} alt="Development" width="90%" />
            <h5>Development</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty3} alt="Marketing" width="90%" />
            <h5>Marketing</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty4} alt="IT and Software" width="90%" />
            <h5>IT and Software</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty5} alt="Personal Development" width="90%" />
            <h5>Personal Development</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty6} alt="Business" width="90%" />
            <h5>Business</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty7} alt="Photography" width="90%" />
            <h5>Photography</h5>
          </div>

          <div className="col col-12 col-md-4 col-lg-3 col-sm-12 mb-5">
            <img src={categoty8} alt="Music" width="90%" />
            <h5>Music</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default categories;
