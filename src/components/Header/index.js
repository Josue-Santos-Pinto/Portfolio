import React from "react";

import { MenuArea, LogoArea, Logo, MenuList, MenuItem } from "./styles";

import logo from "../../assets/logo.png";

import { FaRegMoon } from "react-icons/fa";

export function Header() {
  return (
    <MenuArea>
      <LogoArea>
        <Logo src={logo} />
      </LogoArea>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Sobre mim</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projetos</MenuItem>
        <MenuItem>Contate-me</MenuItem>
        <MenuItem>
          <FaRegMoon />
        </MenuItem>
      </MenuList>
    </MenuArea>
  );
}
