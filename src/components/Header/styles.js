import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuArea = styled.div`
  width: 100vw;
  height: 120px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;
export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  margin-top: -8px;
`;
export const LogoName = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: orbitron;
`;
export const MenuList = styled.ul`
  display: flex;
  flex: 1;
  max-width: 800px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-right: 70px;
`;

export const MenuItem = styled.li`
  height: 30px;
  color: #fff;
  cursor: pointer;
  color: ${(props) => (props.className === "active" ? "#ecaf35" : "#fff")};
`;
