import React from "react";
import { Link } from "react-router-dom";

import Notification from "../components/notifications";

const NavBar = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="etudiants">
                  Etudiants
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="classement">
                  Classement
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/cards">
                  Cards
                </Link>
              </li>
              <li class="nav-item position-absolute end-0">
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
