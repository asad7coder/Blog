import React from "react";
import router_pic from "../../../assets/router.png";
const Component = () => {
  return (
    <>
      <div className="reactt container">
        <div className="row">
          <div className="col">
            <h5>React</h5>
            <h1>React Router</h1>
            <p>
              React Router is a popular library for client-side routing in React
              applications.
            </p>
            <img src={router_pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
