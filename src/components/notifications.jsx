import React from "react";

// ? Notification est un "stateless component" càd qu'il n'a pas de states !

const Notifications = (props) => {
  return (
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
      </span>
    </button>
  );
};

export default Notifications;
