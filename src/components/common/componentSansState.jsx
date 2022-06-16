import React from "react";

const ComponentSansState = (props) => {
  return (
    <div className="container border border-primary py-3">
      <div className="row">
        <h1>Vue de ComponentSansState</h1>
        <p>{props.compteur}</p>
        <button className="btn btn-danger" onClick={props.augmenter}>
          Augmenter
        </button>
      </div>
    </div>
  );
};

export default ComponentSansState;
