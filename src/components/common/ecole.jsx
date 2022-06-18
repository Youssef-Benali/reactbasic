import React, { Component } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// A school need an application for checking the students presence
// We need to dynamically show up list of students per classe

// Une école à besoin d'une application pour vérifier la présence des élèves
// On a besoin d'afficher dynamiquement la liste des étudiants par classe

const present = {
  color: "green",
};

const absent = {
  color: "red",
};

class Ecole extends Component {
  state = {
    title: "6eme",
    students: [
      {
        id: 1,
        name: "Shams",
        lastName: "Uldin",
        asleep: false,
        presence: true,
      },
      {
        id: 2,
        name: "Rinor",
        lastName: "Kossovo",
        asleep: true,
        presence: false,
      },
      { id: 3, name: "Sébastien", lastName: "", asleep: false, presence: true },
      { id: 4, name: "Bao", lastName: "", asleep: false, presence: true },
      { id: 5, name: "Ellen", lastName: "", asleep: false, presence: true },
    ],
  };

  render() {
    return (
      <div>
        {this.state.title}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">État</th>
              <th scope="col">Présence</th>
              <th scope="col">Like</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((s) => (
              <tr key={s.id}>
                <th scope="row">{s.id}</th>
                <td>{s.name}</td>
                <td>{s.lastName}</td>
                <td>{s.asleep === true ? "😴" : "🙂"}</td>
                <td style={s.presence === true ? present : absent}>
                  {s.presence === true ? "Présent" : "Absent"}
                </td>
                <td>
                  <AiOutlineHeart />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ecole;
