import React from "react";
import css_pic from "../../../assets/css-pic.png";
const DGarid = () => {
  // let dataCss=['Css','']
  return (
    <>
      <div className="csss container">
        <div className="row">
          <div className="col">
            <h5>Css</h5>
            <h1>How To use display Grid</h1>
            <p>
              Css is a styling language used to control the layout and
              appearance of web pages written in HTML or XML
            </p>
            <img src={css_pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DGarid;
