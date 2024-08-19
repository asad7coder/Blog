import React from "react";
import css_pic from "../../../assets/css-pic.png";

const Animation = () => {
  
  const animationData={
    animation101:{
      title:"Css",
      topic:"How to use Animation",
      description:"Css is a style sheet language used for describing the presentation of a document written,",
      img1: css_pic,
    },
  }
  return (
    <>
      <div className="csss container">
        <div className="row">
          <div className="col">
            <h5>{animationData.animation101.title}</h5>
            <h1>{animationData.animation101.topic}</h1>
            <p>
              {animationData.animation101.description}
            </p>
            <img src={animationData.animation101.img1} alt="" className="rounded-pill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
