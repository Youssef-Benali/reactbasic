import React from "react";

// ? Est-ce que j'ai besoin des states => non

const Etudiants = (props) => {
  return (
    <ul className="list-group" style={{padding: "1rem 0"}}>
      {props.etudiants.map((e) => (
        <li className="list-group-item"> {e.name}</li>
      ))}
    </ul>
  );
};

export default Etudiants;
