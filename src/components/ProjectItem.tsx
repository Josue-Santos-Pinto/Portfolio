import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Modal, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

type Props = {
  data: {
    name: string;
    desc: string;
    img: string;
    techs: string[];
    links: {
      playstore?: string;
      github: string;
    };
  };
};

const Container = styled.View`
  width: 100%;
  min-height: 240px;
  margin-vertical: 15px;
  justify-content: center;
  align-items: center;
`;

const ImageArea = styled.TouchableOpacity`
  height: 250px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const ProjectImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ProjectName = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
  font-weight: bold;
`;
const ProjectDesc = styled.Text`
  font-size: 15px;
  color: #ccc;
  margin-bottom: 5px;
`;

const TechsArea = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TechsTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
const TechImgArea = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 7px;
  background-color: #fff;
`;
const Tech = styled.Image`
  width: 70%;
  height: 70%;
`;

export function ProjectItem({ data }: Props) {
  return (
    <Container>
      {data && (
        <>
          <ImageArea>
            <ProjectImage source={{ uri: data.img }} resizeMode="contain" />
          </ImageArea>
          <ProjectName>{data.name}</ProjectName>
          <ProjectDesc>{data.desc}</ProjectDesc>
          <TechsArea>
            <TechsTitle>Techs: </TechsTitle>
            {data.techs &&
              data.techs.map((item, index) => (
                <TechImgArea key={index}>
                  <Tech source={{ uri: item }} resizeMode="contain" />
                </TechImgArea>
              ))}
          </TechsArea>
        </>
      )}
    </Container>
  );
}
