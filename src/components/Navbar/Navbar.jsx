import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  // const htmlSection = ["What is Html", "What is Html Atributes"];
  // const cssSection = ["Grid", "Transform", "Animation"];
  // const jsSection = ["what is varibale", "if-else", "Ternory operator"];
  return (
    <>
      <aside className=" w-25 bg-light position-sticky top-0 start-0 overflow-y-scroll" id={styles.sidebar_section}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Html
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Html</li>
                  <li className="list-group-item">Atribute</li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                CSS
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <NavLink to="dgarid">Grid</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="transform">Transform</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="animation">Animation</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Node Js
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <NavLink to="dgarid">Grid</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="transform">Transform</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="animation">Animation</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                JavaScript
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Link to="components">Components</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="jsRagular">jsRagular</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
