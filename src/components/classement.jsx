import React from "react";

const inputStyle={
  border : "1px solid green"
}

const Classement = (props) => {
  // Trier le tableau ici avec sort()
  function compare(a, b) {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  }
  // Le tableau est trié avant d'être mappé
  props.joueurs.sort(compare);
  return (
    <>
      <div className="pb-3">
        <label htmlFor="recherche" className="form-label">
          Taille de l'input {props.search.length}
        </label>
        <input
          style={inputStyle}
          onChange={props.onChange}
          value={props.search}
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
    </>
  );
};

export default Classement;
