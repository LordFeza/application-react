// rfc
import React from "react";
import Person from "./Person";

export default function Persons() {
  return (
    <div className="main">
      <Person titre="mama" prenom="Gaylord" nom="Lukanga Feza" />
      <div className="pitch">
        Aye kosolola na biso tina ya React na botongi ya basite internet.
        <br />
        Tokolanda yango na monoko ya mboka ya maloba yango. Tobengi: English.
        <br />
        <p className="inBrief">
          Tools
          <br />
          The Terminal
          <br />
          Structure
          <br />
          Pascalcase
          <br />
          Syntax
          <br />
          Expressions
          <br />
          Comments
          <br />
          State (functional components)
          <br />
          ...
          <br />
        </p>
      </div>
    </div>
  );
}
