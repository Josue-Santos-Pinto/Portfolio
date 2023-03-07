import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0c0d0d;
`;

const MenuArea = styled.div`
  width: 100vw;
  height: 120px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #101011;
  border-bottom: 0.5px solid #fff;
  blur: 20px;
`;
const MenuList = styled.ul`
  width: 500px;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-right: 70px;
`;

const MenuItem = styled.li`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
const BannerArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 30px;
  padding: 10px 40px;
`;
const BannerLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const BannerLeftTitle = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(28, 28, 29);
  background: linear-gradient(
    45deg,
    rgba(28, 28, 29, 0.4430147058823529) 6%,
    rgba(59, 66, 66, 1) 55%,
    rgba(0, 0, 0, 1) 100%
  );
`;
const BannerLeftTitleText = styled.h3`
  font-size: 17px;
`;
const BannerLeftBox = styled.div`
  display: flex;
  flex: 1;
  margin-top: 40px;
`;

const BannerLeftBoxText = styled.p`
  text-transform: uppercase;
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
`;

const BannerRight = styled.div``;

export function Header() {
  return (
    <Container>
      <MenuArea>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact-me</MenuItem>
        </MenuList>
      </MenuArea>

      <BannerArea>
        <BannerLeft>
          <BannerLeftTitle>
            <BannerLeftTitleText>
              Bem Vindo ao meu portfólio!
            </BannerLeftTitleText>
          </BannerLeftTitle>
          <BannerLeftBox>
            <BannerLeftBoxText>
              Olá, meu nome é Josué, <br /> desenvolvedor mobile
            </BannerLeftBoxText>
          </BannerLeftBox>
        </BannerLeft>
        <BannerRight></BannerRight>
      </BannerArea>
    </Container>
  );
}
