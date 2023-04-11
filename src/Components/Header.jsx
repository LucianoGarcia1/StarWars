import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { GiFilmSpool } from "react-icons/gi";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md"
import logo from "../Assets/swa.svg";
export const Header = () => {

  const [active, setActive] = useState(false);
  const menu = useRef(); 
  useEffect(()=>{
      menu.current.classList.toggle("ativo")
  }, [active])

  return (
    <header className="c-header">
      <div>
        <img src={logo} alt="Star Wars" />
      </div>

      <nav className="nav">
        <ul className="menu" ref={menu}>
          <li>
            <NavLink to="/">
              <BsPersonAdd />
              Personagens
            </NavLink>
          </li>
          <li>
            <NavLink to="/filmes">
              <GiFilmSpool />
              Filmes
            </NavLink>
          </li>

          <button
            type="button"
            className="btnMenu"
            onClick={() => setActive(!active)}
            title="close"
          >
            <MdClose/>
          </button>
        </ul>

        <button
          type="button"
          className="btnMenu"
          onClick={() => setActive(!active)}
          title="menu"
        >
          <BiMenuAltRight />
        </button>
      </nav>
    </header>
  );
};
