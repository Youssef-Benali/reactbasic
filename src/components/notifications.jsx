import React from "react";

// ? Notification est un "stateless component" càd qu'il n'a pas de states !

const Notifications = (props) => {
  return (
<<<<<<< HEAD
    <button onClick={props.handleNotification} type="button" className="btn btn-primary">
      {props.notification === 0 ? null : <span className="pe-3">Notifications</span> }
      <span className={props.notification > 0 ? "badge bg-info" : "badge bg-secondary"}>
          {props.notification}
=======
    <button
      onClick={props.handleNotification}
      type="button"
      className="btn btn-primary"
    >
      {props.notification < 1 ? null : (
        <span className="pe-2 ">Notifications</span>
      )}
      <span
        className={props.notification < 1 ? "badge bg-danger" : "badge bg-info"}
      >
        {props.notification}
>>>>>>> 0feade28c67ca7a811331095dc3cfba6d1f15be2
      </span>
    </button>
  );
};

export default Notifications;
