import React from "react";

const Premium = (props) => {
  return (
    <div className="container py-3 border border-primary">
      <div className="row">
        <h1>Premium</h1>
        <p className="badge bg-secondary">
          {props.premium === true
            ? "Vue de ComponentState"
            : "Vue de s'abonner"}
        </p>
        <button className="btn btn-primary" onClick={props.jeSuisUneMethode}>
          Changer state premium
        </button>
      </div>
    </div>
  );
};

export default Premium;
