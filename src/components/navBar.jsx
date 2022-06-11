import React from "react";
import { Link } from "react-router-dom";

import Notification from "../components/notifications";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="etudiants">
                  Etudiants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="classement">
                  Classement
                </Link>
              </li>
<<<<<<< HEAD
              <li class="nav-item">
=======
              <li className="nav-item">
>>>>>>> 0feade28c67ca7a811331095dc3cfba6d1f15be2
                <Link className="nav-link" to="/cards">
                  Cards
                </Link>
              </li>
<<<<<<< HEAD
              <li class="nav-item position-absolute end-0">
=======
              <li className="nav-item">
>>>>>>> 0feade28c67ca7a811331095dc3cfba6d1f15be2
                <Notification
                  notification={props.notification}
                  handleNotification={props.handleNotification}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
