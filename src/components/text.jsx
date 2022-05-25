import React, { Component } from "react";

import NavBar from "./navBar";
import Etudiants from "./etudiants";
import Notifications from "./notifications.jsx";
import Cards from "./cards";

class Text extends Component {
  state = {
    etudiants: [
      { name: "Zelda", id: 1 },
      { name: "Bao", id: 2 },
      { name: "Bao", id: 3 },
      { name: "Salam", id: 4 },
      { name: "Hello", id: 5 },
    ],
    notification: 0,
  };

  handleNotification = () => {
    this.setState({ notification: this.state.notification + 1 });
  };

  render() {
    return (
      <>
        <NavBar />
        <Etudiants etudiants={this.state.etudiants} />
        <Notifications
          handleNotification={this.handleNotification}
          notification={this.state.notification}
        />
        <Cards />
      </>
    );
  }
}

export default Text;
