import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  data: {
    name: string;
    desc: string;
    img: string;
    techs: string[];
    links: {
      playstore: string;
      github: string;
    };
  };
};

const Container = styled.View`
  width: 100%;
  min-height: 240px;
  margin-vertical: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
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
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;
const ProjectDesc = styled.Text`
  font-size: 15px;
  color: #333;
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
  color: #333;
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
const LinksArea = styled.View`
  flex: 1;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const LinkButtonArea = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  align-items: center;
`;
const LinkIcon = styled.Image`
  width: 80%;
  height: 80%;
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
          <LinksArea>
            {data.links.github && (
              <LinkButtonArea
                style={{ backgroundColor: 'black' }}
                onPress={() => Linking.openURL(data.links.github)}
              >
                <FontAwesome name="github" color="#fff" size={50} />
              </LinkButtonArea>
            )}
            {data.links.playstore && (
              <LinkButtonArea
                style={{ backgroundColor: '#fff' }}
                onPress={() => Linking.openURL(data.links.playstore)}
              >
                <LinkIcon source={require('../assets/images/playstore.png')} resizeMode="contain" />
              </LinkButtonArea>
            )}
          </LinksArea>
        </>
      )}
    </Container>
  );
}
