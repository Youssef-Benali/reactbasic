import React from "react";

// ? Est-ce que j'ai besoin des states => non

const Etudiants = (props) => {
  return (
    <ul className="list-group p-3">
      {props.etudiants.map((e) => (
        <li key={e.id} className="list-group-item"> {e.name}</li>
      ))}
    </ul>
  );
};

export default Etudiants;
