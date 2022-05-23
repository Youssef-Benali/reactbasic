import React, { Component } from "react";
import Compteur from "./components/compteur";
import "./App.css";

class App extends Component {
  // state = états
  state = {
    // Ne jamais changer une state directement : Utiliser this.setState({})
    compteur: 0,
    isPremium: false,
  };

  // méthodes (fonction fléché) => bind this par défaut
  incrementation = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };

  // Méthode qui toggle isPremium
  connection = () => {
    this.setState({ isPremium: !this.state.isPremium });
  };

  // Méthode qui affiche le contenu
  affichage = () => {
    const { compteur } = this.state; // Interface (vous voyez les objets utilisés)
    return (
      <div>
        <h1>Salut</h1>
        {/* Si c'est en dessous de 10, c'est rouge sinon c'est vert */}
        <p className={compteur < 10 ? "red" : "green"}>{compteur}</p>
        {/* Rendu conditioné (Conditional rendering) */}
        <p>{compteur > 5 ? "+ de 5" : null}</p>
        {/* Créer une condition qui s'active uniquement à 8 et qui affiche "bravo" */}
        <p>{compteur === 8 ? "bravo" : null}</p>
        {/* Ne jamais mettre de parenthèse aux méthodes dans un event */}
        <button onClick={this.incrementation}> Incrementer </button>
      </div>
    );
  };

  render() {
    return (
      <>
        <Compteur 
        connection={this.connection}
        affichage={this.affichage}
        isPremium={this.state.isPremium}/>
      </>
    );
  }
}

export default App;