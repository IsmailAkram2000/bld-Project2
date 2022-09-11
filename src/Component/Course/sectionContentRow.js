import React from "react";

function sectionContentRow({ elementRow }) {
  return (
    <div className="d-flex">
      <div className="content-text">
        <i className="fa-solid fa-circle-play"></i>
        <a> {elementRow?.name}</a>
      </div>
      <h1 className="flex-grow-1"></h1>
      <div className="d-flex Preview">
        <a className="preview-a">Preview </a>
        <p>{elementRow?.time}</p>
      </div>
    </div>
  );
}

export default sectionContentRow;
