import React from "react";
import { Link } from "react-router-dom";

export const Content = ({ dados }) => {
  return (
    <div className="c-content">
      {dados.map((e) => (
        <Link className="box" key={e.id} to={`character/${e.id}`}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${e.id}.jpg`}
            alt={e.name}
          />
          <h3 className="title">{e.name}</h3>
        </Link>
      ))}
    </div>
  );
};
