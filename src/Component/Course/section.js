import React from "react";
import Learn from "./learn";
import Content from "./content";
import Description from "./description";
import Instructors from "./instructors";
import Feedback from "./feedback";
import Reviews from "./reviews";

function section() {
  return (
    <React.Fragment>
      <section>
        <Learn />
        <Content />
        <Description />
        <Instructors />
        <Feedback />
        <Reviews />
      </section>
    </React.Fragment>
  );
}

export default section;
