import React, { useContext } from 'react';
import { StoreData } from '../../../ContextApi/StoreData/StoreData';
import styles from "./JavaScript.module.css";
const JavaScript = () => {
  const data = useContext(StoreData);

  return (
    <>
    <div className="container d-flex gap-2  w-100 h-100 bg-light flex-wrap">

      {data.map((item, index) => (
        <div className="card" id={styles.cardMainContainer} key={index}>
          <img src={item.imgs} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.heading}</h5>
            <p className="card-text">{item.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <span class="badge bg-warning text-dark">
              {item.topics}
            </span>
            <button type="button" class="btn btn-warning text-end btn-link">
              <a href="#">
              Learn More

              </a>
              </button>
              </li>
          </ul>
        </div>
      ))}
          </div>
    </>
  );
}

export default JavaScript;
