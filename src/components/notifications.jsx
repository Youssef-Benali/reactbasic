import React from "react";

// ? Est-ce que j'ai besoin des states => non 

const Notifications = (props) => {
  return (
    <button onClick={props.handleNotification} type="button" className="btn btn-primary">
      Notifications 
      <span className="badge bg-info">
          {props.notification}
      </span>
    </button>
  );
};

export default Notifications;