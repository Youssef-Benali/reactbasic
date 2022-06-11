import React from "react";

// ? Est-ce que j'ai besoin des states => non 

const Notifications = (props) => {
  return (
    <button onClick={props.handleNotification} type="button" className="btn btn-primary">
      {props.notification === 0 ? null : <span className="pe-3">Notifications</span> }
      <span className={props.notification > 0 ? "badge bg-info" : "badge bg-secondary"}>
          {props.notification}
      </span>
    </button>
  );
};

export default Notifications;