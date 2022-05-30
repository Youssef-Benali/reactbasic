import React, { Component } from "react";

import NavBar from "./navBar";
import Etudiants from "./etudiants";
import Notifications from "./notifications.jsx";
import Cards from "./cards";
import Classement from "./classement";

import Bootstrap from "./bootstrap";

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
    joueurs: [
      {nom: "Bob", prenom: "Joe", score: 546},
      {nom: "Sonic", prenom: "Boom", score: 2789},
      {nom: "Hello", prenom: "Maximain", score: 456},
      {nom: "Lorem", prenom: "Ipsum", score: 722},
      {nom: "Raf", prenom: "Pite", score: 867},
    ]
  };

  handleNotification = () => {
    this.setState({ notification: this.state.notification + 1 });
  };

  render() {
    return (
      <>
        {/* <NavBar />
        <Etudiants etudiants={this.state.etudiants} />
        <Notifications
          handleNotification={this.handleNotification}
          notification={this.state.notification}
        />
        <Cards /> */}

        <Bootstrap/>

        {/* <Classement joueurs={this.state.joueurs}/> */}
      </>
    );
  }
}

export default Text;
