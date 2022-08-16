// rfc
import React from "react";

//props est un mot réservé
export default function Person(props) {
  // Avec la destructuration, on a :
  // export default function Person({titre, prenom, nom}) {
  return (
    <div>
      <p>
        Boyeyi malamu na<span> </span>
        <span>
          {props.titre} {props.prenom} {props.nom}
        </span>
        !
        <br />
      </p>
    </div>
  );
}
