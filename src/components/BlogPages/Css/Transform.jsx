import React from "react";
import css_pic from "../../../assets/css-pic.png";

const Transform = () => {
  return (
    <>
      <div className="csss container">
        <div className="row">
          <div className="col">
            <h5>Css</h5>
            <h1>How To use Tranform</h1>
            <p>
              Css is a styling language used to control the layout and
              appearance of web pages written in HTML or XML
            </p>
            <img src={css_pic} alt="" className="rounded-circle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transform;
