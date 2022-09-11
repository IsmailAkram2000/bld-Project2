import React, { PureComponent } from "react";
import "../../Styles/Home/title.css";

export class title extends PureComponent {
  render() {
    return (
      <div className="main-title">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courses with new additions published
          every month.
        </p>
      </div>
    );
  }
}

export default title;
