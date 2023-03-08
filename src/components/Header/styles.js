import styled from "styled-components";

export const MenuArea = styled.div`
  width: 100vw;
  height: 120px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LogoArea = styled.div`
  width: 220px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const MenuList = styled.ul`
  width: 500px;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-right: 70px;
`;

export const MenuItem = styled.li`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #2e2d31;
`;
