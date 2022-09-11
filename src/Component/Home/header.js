import React, { PureComponent } from "react";
import alarm from "../../Images/Alarm.jpeg";
import "../../Styles/Home/header.css";

class header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header-text-home">
          <h1>New to Udemy? Lucky you.</h1>
          <p>
            Courses start at E€169.99. Get your new-student offer before it
            expires.
          </p>
        </div>

        <img src={alarm} alt="alarm image" className="alarm" />
      </header>
    );
  }
}

export default header;
