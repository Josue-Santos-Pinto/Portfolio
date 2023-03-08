import React from "react";

import {
  Container,
  MenuArea,
  LogoArea,
  Logo,
  MenuList,
  MenuItem,
  BannerArea,
  BannerSocialMedia,
  BannerSocialMediaItem,
  BannerBox,
  BannerBoxTitle,
  BannerBoxSubTitle,
  BannerButton,
  BannerAvatarArea,
  BannerAvatar,
} from "./styles";

import logo from "../../assets/logo.png";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import perfil from "../../assets/perfil.png";

export function Header() {
  return (
    <Container>
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
        </MenuList>
      </MenuArea>

      <BannerArea>
        {/* SOCIAL MEDIAS */}

        <BannerSocialMedia>
          <BannerSocialMediaItem>
            <FaLinkedin style={{ width: "100%", height: "100%" }} />
          </BannerSocialMediaItem>
          <BannerSocialMediaItem>
            <FaGithub style={{ width: "100%", height: "100%" }} />
          </BannerSocialMediaItem>
          <BannerSocialMediaItem>
            <FaInstagram style={{ width: "100%", height: "100%" }} />
          </BannerSocialMediaItem>
        </BannerSocialMedia>

        <BannerBox>
          <BannerBoxTitle>Oi, meu nome é Josué</BannerBoxTitle>
          <BannerBoxSubTitle>Desenvolvedor mobile/ Front-end</BannerBoxSubTitle>

          <BannerButton>Fale comigo</BannerButton>
        </BannerBox>

        <BannerAvatarArea>
          <BannerAvatar src={perfil} />
        </BannerAvatarArea>
      </BannerArea>
    </Container>
  );
}
