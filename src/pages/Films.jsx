import React, { useEffect, useState } from "react";
import starwars from "../Services/api.js";

export const Films = () => {
  const [dados, setDados] = useState(null);
  const [infos, setInfos] = useState(null);

  const getFilms = async (url) => {
    try {
      const response = await starwars.get(url);
      const jbody = await response.data;
      setDados(
        jbody.results.map((character) => {
          const characterId = character.url.split("/").slice(-2, -1)[0];
          return { ...character, id: characterId };
        })
      );
      console.log(jbody);
      setInfos(jbody);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilms(`/films/`);
  }, []);
  if (dados === null) return null;
  return (
    <section className="p-filmes fadeLeft">
      {dados.map((e) => (
        <div className="box" key={e.id}>
          <img
            src={`https://starwars-visualguide.com/assets/img/films/${e.id}.jpg`}
            alt=""
          />
          <h3 className="title">{e.title}</h3>

          <ul>
            <li>
              Director: <span>{e.director}</span>
            </li>
            <li>
              Data de criação: <span>{e.release_date}</span>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};
