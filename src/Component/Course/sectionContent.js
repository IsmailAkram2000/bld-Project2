import React from "react";
import SectionContentRow from "./sectionContentRow";

function sectionContent({ element }) {
  const allRows = element?.rows?.map((el, idx) => {
    return <SectionContentRow elementRow={el} key={idx} />;
  });

  return (
    <React.Fragment>
      <button
        className="title-box collapsed"
        data-bs-toggle="collapse"
        href={`#multiCollapseExample${element?.id}`}
        role="button"
        aria-expanded="false"
        aria-controls={`multiCollapseExample${element?.id}`}
      >
        <div className="title-row d-flex">
          <h5>{element?.title}</h5>
          <h1></h1>
          <p>{element?.lec_time}</p>
        </div>
      </button>

      <div
        className="content-row collapse"
        id={`multiCollapseExample${element?.id}`}
      >
        {allRows}
      </div>
    </React.Fragment>
  );
}

export default sectionContent;
