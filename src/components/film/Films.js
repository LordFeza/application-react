// rfc
import React from "react";
import Film from "./Film";

export default function Films() {
  const myMovies = [
    { id: 1, titre: "La vie est belle", annee: "1988" },
    { id: 2, titre: "Camp de Thiaroye", annee: "1988" },
    { id: 3, titre: "Bal Poussière", annee: "1989" },
    { id: 4, titre: "Viva Riva!", annee: "2010" },
    { id: 5, titre: "King of boys", annee: "2018" },
  ];
  return (
    <>
      <section className="ads">
        <div>
          <h1 className="animationAds">
            Win a collector movie from our partners
          </h1>
        </div>
        <div className="filmContainer">
          {myMovies.map((e) => (
            <Film key={e.id} titre={e.titre} annee={e.annee} />
          ))}
        </div>
      </section>
    </>
  );
}
