import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MenuArea, LogoArea, LogoName, MenuList, MenuItem } from "./styles";

import { FaRegMoon } from "react-icons/fa";

export function Header() {
  return (
    <MenuArea>
      <LogoArea>
        <LogoName>JOSUÉ</LogoName>
      </LogoArea>
      <MenuList>
        <MenuItem>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ecaf35" : "#fff",
                borderBottom: isActive ? "2px solid #ecaf35" : 0,
                textDecoration: "none",
              };
            }}
            to="/"
          >
            Inicio
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ecaf35" : "#fff",
                borderBottom: isActive ? "2px solid #ecaf35" : 0,
                textDecoration: "none",
              };
            }}
            to="/about"
          >
            Sobre mim
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ecaf35" : "#fff",
                borderBottom: isActive ? "2px solid #ecaf35" : 0,
                textDecoration: "none",
              };
            }}
            to="/projects"
          >
            Projetos
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ecaf35" : "#fff",
                borderBottom: isActive ? "2px solid #ecaf35" : 0,
                textDecoration: "none",
              };
            }}
            to="/skills"
          >
            Habilidades
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ecaf35" : "#fff",
                borderBottom: isActive ? "2px solid #ecaf35" : 0,
                textDecoration: "none",
              };
            }}
            to="/contact"
          >
            Contate-me
          </NavLink>
        </MenuItem>
        <MenuItem>
          <FaRegMoon />
        </MenuItem>
      </MenuList>
    </MenuArea>
  );
}
