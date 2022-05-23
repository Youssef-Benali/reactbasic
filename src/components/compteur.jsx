import React from "react";
import "../css/compteur.css";

// stateless component

const Compteur = (props) => {
  return (
    <>
      {props.isPremium === true 
      ? props.affichage() 
      : "Veuillez vous connecter"}

      <button onClick={props.connection}>
        {props.isPremium === false ? "Se connecter" : "Se déconnecter"}
      </button>
    </>
  );
};

export default Compteur;