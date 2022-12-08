import React from "react";

const Cards = (props) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="card p-3">
        <div className="card-body text-center">
          <i className={`fa ${props.icon} fa-4x mb-4 text-primary`}></i>
          <h5 className="card-title mb-3 fs-4 fw-bold">{props.title}</h5>
          <p className="card-text lead">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
