import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcfbff;
`;

const MenuArea = styled.div`
  width: 100vw;
  height: 120px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LogoArea = styled.div`
  width: 200px;
  height: 120px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  color: #2e2d31;
`;
const BannerArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 30px;
  padding: 10px 40px;
  justify-content: space-around;
  align-items: center;
`;

const BannerSocialMedia = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  background-color: #fff;
  min-height: 400px;
  justify-content: center;
  align-items: center;
`;

const BannerSocialMediaItem = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;
`;
const Icon = styled.img``;

const BannerBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const BannerBoxTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const BannerBoxSubTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

const BannerAvatarArea = styled.div`
  display: flex;
  flex: 1;
  background-color: #000;
  min-height: 400px;
`;

export function Header() {
  return (
    <Container>
      <MenuArea>
        <LogoArea>
          <Logo src={logo} />
        </LogoArea>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact-me</MenuItem>
        </MenuList>
      </MenuArea>

      <BannerArea>
        {/* SOCIAL MEDIAS */}

        <BannerSocialMedia>
          <BannerSocialMediaItem>
            <Icon src={linkedin} />
          </BannerSocialMediaItem>
          <BannerSocialMediaItem>
            <Icon src={github} />
          </BannerSocialMediaItem>
          <BannerSocialMediaItem>
            <Icon src={instagram} />
          </BannerSocialMediaItem>
        </BannerSocialMedia>

        <BannerBox>
          <BannerBoxTitle>Oi, meu nome é Josué</BannerBoxTitle>
          <BannerBoxSubTitle>Desenvolvedor mobile/ Front-end</BannerBoxSubTitle>
        </BannerBox>

        <BannerAvatarArea></BannerAvatarArea>
      </BannerArea>
    </Container>
  );
}
