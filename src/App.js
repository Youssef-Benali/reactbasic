import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Etudiants from "./components/etudiants";
import Classement from "./components/classement";
import Cards from "./components/cards";

import { getPlayers } from "./services/fakeDataBase";
import Home from "./components/home";

class App extends Component {
  state = {
    etudiants: [
      { name: "Zelda", id: 1 },
      { name: "Bao", id: 2 },
      { name: "Bao", id: 3 },
      { name: "Salam", id: 4 },
      { name: "Hello", id: 5 },
    ],
    notification: 0,
    joueurs: getPlayers(),
    search: "",

    value: ""
  };

  handleNotification = () => {
    this.setState({ notification: this.state.notification + 1 });
  };
  handleDelete = (joueur) => {
    // [...] = Spread Operator
    // On clone le tableau
    const joueursCopy = [...this.state.joueurs];
    // On filtre le tableau
    const joueurs = joueursCopy.filter((j) => j !== joueur);
    // On met à jour la state avec le nouveau tableau
    this.setState({ joueurs });
  };
  // Here, Ici
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar
            handleNotification={this.handleNotification}
            notification={this.state.notification}
          />
          <Routes>
            <Route path="/" element={<Home valeur={this.state.test}/>}/>
            <Route
              path="/etudiants"
              element={<Etudiants etudiants={this.state.etudiants} />}
            />
            <Route
              path="/classement"
              element={
                <Classement
                  search={this.state.search}
                  onChange={this.handleChange}
                  onDelete={this.handleDelete}
                  joueurs={this.state.joueurs}
                />
              }
            />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
