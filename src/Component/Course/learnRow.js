import React from "react";

function learnRow({ data }) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6">
      <p>
        <i className="fa-solid fa-check"></i> &nbsp; {data}
      </p>
    </div>
  );
}

export default learnRow;
