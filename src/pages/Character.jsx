import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import starwars from "../Services/api.js";

export const Character = () => {
  const { id } = useParams();
  const [dados, setDados] = useState(null);
  const getCharacter = async (url) => {
    try {
      const response = await starwars.get(url);
      const jbody = await response.data;
      setDados(jbody);
      console.log(jbody);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacter(`/people/${id}`);
  }, [id]);

  if (dados === null) return null;
  return (
    <section className="c-character fadeLeft">
      <div className="character_info">
        <div>
          <h2>{dados.name}</h2>
          <ul>
            <li>
              Nascimento: <span className="details">{dados.birth_year}</span>
            </li>
            <li>
              Gênero: <span className="details">{dados.gender}</span>
            </li>
            <li>
              Altura: <span className="details">{dados.height}</span>
            </li>
            <li>
              Peso: <span className="details">{dados.mass}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Films</h2>

          <ul>
            {dados.films.map((e, index) => (
              <li key={index}>
                <Link to>{e}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={dados.name}
      />
    </section>
  );
};
