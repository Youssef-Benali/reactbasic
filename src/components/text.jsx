import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./navBar";
import Etudiants from "./etudiants";
import Notifications from "./notifications.jsx";
import Cards from "./cards";
import Classement from "./classement";
import { getPlayers } from "../services/fakeDataBase";

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

    joueurs: getPlayers()
  };

  handleNotification = () => {
    this.setState({ notification: this.state.notification + 1 });
  };

  handleDelete = joueur => {
    // [...] = Spread Operator
    // On clone le tableau
    const joueursCopy = [...this.state.joueurs]
    // On filtre le tableau
    const joueurs = joueursCopy.filter(j => j !== joueur)
    // On met à jour la state avec le nouveau tableau
    this.setState({joueurs})
  }

  render() {
    return (
      <>
        <BrowserRouter>
        <NavBar handleNotification={this.handleNotification}
              notification={this.state.notification}/>
          <Routes>
            <Route path="/etudiants" element={<Etudiants etudiants={this.state.etudiants} />}/>
            <Route path="/classement" element={<Classement onDelete={this.handleDelete} joueurs={this.state.joueurs}/>}/>
            {/*  Créer une nouvelle route et afficher le composant <Cards/> */}
            <Route path="/cards" element={<Cards/>}/>
            
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Text;
