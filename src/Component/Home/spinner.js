import React from "react";
import "../../Styles/Home/spinner.css";

function spinner() {
  return (
    <div className="spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default spinner;
