import React from 'react';

const Compteur = (props) => {
    let classe = "badge bg";

    if (props.compteur > 0) {
      classe += "-primary";
    } else {
      classe += "-secondary";
    }
    return (
        <div className="container py-3 border border-primary">
          <div className="row">
            <h1>Compteur</h1>
            <p className={classe}>{props.compteur}</p>
            <button className="btn btn-danger" onClick={props.augmenter}>
              Augmenter
            </button>
            {/* Créer un bouton qui remet le compteur à 0 */}
            {/* Create a button that reset the count to 0 */}
            <button onClick={props.reset} className="btn btn-danger mt-3 ">
              Remettre à zéro
            </button>
          </div>
        </div>
    );
};

export default Compteur;