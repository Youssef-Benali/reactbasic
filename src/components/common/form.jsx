import React from "react";

const Form = (props) => {
  return (
    <form>
      <input
        onChange={props.onChange}
        id="name"
        name="name"
        placeholder="Name"
        type="text"
      />
      <input
        onChange={props.onChange}
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
      />
      <button onClick={props.onAddPlayer}> Ajouter étudiant</button>
    </form>
  );
};

export default Form;
