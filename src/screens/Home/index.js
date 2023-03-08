import React from "react";
import {
  Container,
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

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { IoSendSharp } from "react-icons/io5";

import perfil from "../../assets/perfil.png";

export function Home() {
  return (
    <Container>
      {" "}
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

          <BannerButton>
            Fale comigo <IoSendSharp />
          </BannerButton>
        </BannerBox>

        <BannerAvatarArea>
          <BannerAvatar src={perfil} />
        </BannerAvatarArea>
      </BannerArea>
    </Container>
  );
}
