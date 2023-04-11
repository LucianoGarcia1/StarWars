import React, { useEffect, useState } from "react";
import starwars from "../Services/api.js";
import { Content } from "../Components/Content.jsx";
import { Button } from "../Components/Button.jsx";

export const Home = () => {
  const [input, setInput] = useState("");
  const [dados, setDados] = useState(null);
  const [page, setPage] = useState(1);
  const [infos, setInfos] = useState(null);

  const getDados = async (url) => {
    try {
      const response = await starwars.get(url);
      const jbody = await response.data;
      setDados(
        jbody.results.map((character) => {
          const characterId = character.url.split("/").slice(-2, -1)[0];
          return { ...character, id: characterId };
        })
      );
      setInfos(jbody);
    } catch (error) {
      console.log(error);
    }
  };

  const getCharacter = async (url) => {
    try {
      const response = await starwars.get(url);
      const jbody = await response.data;
      setDados(
        jbody.results.map((character) => {
          const characterId = character.url.split("/").slice(-2, -1)[0];
          return { ...character, id: characterId };
        })
      );
      setInfos(jbody);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (input !== "") {
      getCharacter(`/people/?search=${input}`);
    } else {
      getDados(`/people/?page=${page}`);
    }
  }, [page, input]);

  if (dados === null) return null;
  return (
    <section className="p-home fadeLeft">
      <div className="search">
        <h1 className="search_title">
          Buscar - <span>Personagem</span>
        </h1>

        <form className="search_form">
          <input
            type="search"
            className="search_input"
            placeholder="Nome do personagem..."
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
        </form>
      </div>

      <Content dados={dados} />
      {infos.previous && (
        <Button
          children={`Previous ${page - 1}`}
          onClick={() => setPage((prev) => prev - 1)}
        />
      )}
      {infos.next && (
        <Button
          children={`Next ${page + 1}`}
          onClick={() => setPage((next) => next + 1)}
        />
      )}
    </section>
  );
};
