import React from "react";
import "../css/home.css";

const Home = (props) => {
  return (
    <div className="accordion m-5" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Les composants
          </button>
        </h2>

        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body">
            <strong>Il y a deux types de composant</strong> <br />
            <br />
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-primary">
                    Statefull component
                  </div>
                  Des composants avec des states
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-primary">
                    Stateless component
                  </div>
                  Des composants sans states
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Les states et les props
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body">
            Une state est{" "}
            <strong>une donnée locale propre à un composant</strong>
            <br />
            Un props est{" "}
            <strong>une donnée que l'on passe à un composant</strong>
            <br />
            <br />
            Une state n'est pas accessible par un autre composant, elle est
            privée par défaut sauf si on décide de la passer via un props que
            l'on passe à un composant voulu
            <br />
            <br />
            Règles importantes ;
            <ol className="pt-3 list-group list-group-numbered">
              <li className="list-group-item">
                On ne change pas une state directement,{" "}
                <span style={{ textDecoration: "line-through" }}>
                  this.state.titre = "Hello"
                </span>
                , on utilise this.setState()
              </li>
              <li className="list-group-item">
                On ne change pas la valeur d'un props,{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {" "}
                  props.value = 5
                </span>
                , on change la state qui est lié au props
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Exercices
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div className="accordion-body">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Composant</h5>
                  <small>60 minutes</small>
                </div>
                <p class="mb-1">Créer un composant info.jsx qui affiche les informations de la base de données</p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre ce qu'est un composant,
                  différence entre props et states
                </small>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Liker un joueur</h5>
                  <small class="text-muted">60 minutes</small>
                </div>
                <p class="mb-1">Créer un bouton like à côté de chaque joueur et permettre le like individuel</p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre l'indépendance des
                  fonctionnalités (like unique par joueur)
                </small>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Les formulaires</h5>
                  <small class="text-muted">60 minutes</small>
                </div>
                <p class="mb-1">
                  Créer un "controlled form", formulaire controlé{" "}
                </p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre le fonctionnement des formulaires avec React
                </small>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Ajouter un joueur</h5>
                  <small class="text-muted">60 minutes</small>
                </div>
                <p class="mb-1">Grâce au formulaire, ajouter un joueur</p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre comment les données sont synchronisé et ajouté
                </small>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Fiche unique par joueur</h5>
                  <small class="text-muted">60 minutes</small>
                </div>
                <p class="mb-1">Créer un composant profile.jsx</p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre l'indépendance des
                  fonctionnalités (fiche unique par joueur)
                </small>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Modifier les données d'un joueur</h5>
                  <small class="text-muted">60 minutes</small>
                </div>
                <p class="mb-1">
                  Dans profile.jsx, possibilité de modifier les données d'un
                </p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre la programmation d'url,
                  passer des données via l'url et utilisation de l'objet history
                </small>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    Trie ascendant et descendant en cliquant sur les titres
                  </h5>
                  <small class="text-muted">60 minutes</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-muted">
                  Objectif de l'exercice : comprendre l'indépendance des
                  fonctionnalités (trie unique par variable (name, score
                  etc...))
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
