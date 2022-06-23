import React, { Component } from "react";
import Form from "./form";

import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiFillDelete,
} from "react-icons/ai";

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
        liked: false,
      },
      {
        id: 2,
        name: "Rinor",
        lastName: "Kossovo",
        asleep: true,
        presence: false,
        liked: false,
      },
      {
        id: 3,
        name: "Sébastien",
        lastName: "",
        asleep: false,
        presence: true,
        liked: false,
      },
      {
        id: 4,
        name: "Bao",
        lastName: "",
        asleep: false,
        presence: true,
        liked: false,
      },
      {
        id: 5,
        name: "Ellen",
        lastName: "",
        asleep: false,
        presence: true,
        liked: false,
      },
    ],
    student: { name: "", lastName: "" },
  };

  handleLike = (s) => {
    // Cloner le tableau
    const students = [...this.state.students];
    // Récupérer l'index de l'objet en paramètre
    const index = students.indexOf(s);
    // Modifier la clé liked du tableau students
    students[index].liked = !students[index].liked;
    // Écraser le tableau state par le tableau cloné
    this.setState({ students });
  };

  handleDelete = (s) => {
    const students = this.state.students.filter((student) => student !== s);
    this.setState({ students });
  };

  handleChange = ({ currentTarget }) => {
    const student = { ...this.state.student };
    student[currentTarget.name] = currentTarget.value;
    this.setState({ student: student });
  };

  handleAddPlayer = (e) => {
    e.preventDefault();
    const id = this.state.students.length + 1

    const students = [...this.state.students];
    const student = {
      id: id,
      ...this.state.student,
      asleep: false,
      presence: true,
      liked: false,
    };
    // Ajouter la copie du joueur dans la copie du tableau
    students.push(student);

    this.setState({ students: students });
  };

  render() {
    return (
      <div style={{ margin: "1rem" }}>
        <p>
          Il y'a {this.state.students.length} étudiants dans la base de données
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">État</th>
              <th scope="col">Présence</th>
              <th scope="col">Like</th>
              <th scope="col">Delete</th>
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
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleLike(s)}
                >
                  {s.liked === false ? (
                    <AiOutlineCheckCircle />
                  ) : (
                    <AiFillCheckCircle />
                  )}
                </td>
                <td onClick={() => this.handleDelete(s)}>
                  <AiFillDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form onAddPlayer={this.handleAddPlayer} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Ecole;
