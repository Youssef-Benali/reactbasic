import React, { Component } from "react";
import NavBar from "./navBar";

class Text extends Component {
  state = {
    etudiants: [
      { name: "Zelda", id: 1 },
      { name: "Bao", id: 2 },
      { name: "Bao", id: 3 },
      { name: "Salam", id: 4 },
      { name: "Hello", id: 5 },
    ],
  };
  render() {
    return (
      // Rendre une liste avec map
      <>
      <NavBar/>
        <ul className="list-group">
          {this.state.etudiants.map((etudiant) => {
            if (etudiant.name === "Bao") {
              return <li class="list-group-item" key={etudiant.id}> Bao interdit</li>;
            } else {
              return <li class="list-group-item" key={etudiant.id}> {etudiant.name}</li>;
            }
          })}
        </ul>

     
      </>
    );
  }
}

export default Text;
