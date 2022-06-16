import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ComponentSansState from "./componentSansState";
import Compteur from "./compteur";
import NavBar from "./navBar";
import Premium from "./premium";

class ComponentState extends Component {
  state = {
    premium: false,
    compteur: 0,
  };

  jeSuisUneMethode = () => {
    this.setState({ premium: !this.state.premium });
  };

  augmenter = () =>{
    this.setState({ compteur: this.state.compteur + 1 });
  };

  reset = () => {
    this.setState({ compteur: 0 });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/>
            <Routes>
            <Route path="/" element={ <Premium
                premium={this.state.premium}
                jeSuisUneMethode={this.jeSuisUneMethode}
              />}/>
            
            <Route path="/compteur" element={<Compteur
                compteur={this.state.compteur}
                augmenter={this.augmenter}
                reset={this.reset}
              />}/>

              <Route path="/component" element={<ComponentSansState
                compteur={this.state.compteur}
                augmenter={this.augmenter}
              /> }/>
              
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default ComponentState;
