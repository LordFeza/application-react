// rfc
import React from "react";

// avec la destructuration
export default function Film({ titre, annee }) {
  return (
    <div className="filmTags">
      <p>{titre}</p>
      <p>{annee}</p>
    </div>
  );
}
