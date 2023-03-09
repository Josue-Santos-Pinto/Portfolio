import React, { useState } from "react";

import { MenuArea, LogoArea, LogoName, MenuList, MenuItem } from "./styles";

import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-scroll";

export function Header() {
  const [active, setActive] = useState(false);

  return (
    <MenuArea>
      <LogoArea>
        <LogoName>JOSUÉ</LogoName>
      </LogoArea>
      <MenuList>
        <MenuItem>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setActive(true)}
          >
            Inicio
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setActive(true)} active={active}>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            Sobre mim
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setActive(true)}
          >
            Projetos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setActive(true)}
          >
            Habilidades
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setActive(true)}
          >
            Contate-me
          </Link>
        </MenuItem>
        <MenuItem>
          <FaRegMoon />
        </MenuItem>
      </MenuList>
    </MenuArea>
  );
}
