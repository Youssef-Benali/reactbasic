import React from "react";

const [inputBorderGreen, inputBorderRed] = [
  { border: "2px solid green" },
  { border: "2px solid red" },
];

const Classement = (props) => {
  // Le tableau est trié avant d'être mappé
  props.joueurs.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });

  // ! Créer une méthode qui va s'occuper de la couleur de la bordure de l'input

  return (
    <>
      <div className="p-3">
        <div>
          <input
            style={props.search.length < 8 ? inputBorderRed : inputBorderGreen}
            onChange={props.onChange}
            value={props.search}
            placeholder="Rechercher un joueur"
            type="text"
            className="form-control"
            id="recherche"
            aria-describedby="emailHelp"
          />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {props.joueurs.map((joueur) => (
              <tr key={joueur.prenom}>
                <th>{props.joueurs.indexOf(joueur) + 1}</th>
                <td style={{ color: "blue" }}>{joueur.prenom}</td>
                <td>{joueur.nom}</td>
                <td>{joueur.score}</td>
                <td>
                  <button
                    onClick={() => props.onDelete(joueur)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Classement;
