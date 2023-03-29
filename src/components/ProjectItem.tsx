import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Modal, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

type Props = {
  data: {
    name: string;
    desc: string;
    img: HTMLImageElement;
    techs: string[];
    links: {
      playstore?: string;
      github: string;
    };
  };
};

const ImageArea = styled.TouchableOpacity`
  height: 100%;
  width: 120px;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
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
`;
const ModalProjectNameArea = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
`;
const ModalProjectName = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`;
const BackButtonArea = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
const ModalBgName = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
const ModalProjectDescArea = styled.View`
  width: 100%;
  height: 250px;
  padding-horizontal: 30px;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  z-index: 99;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
`;
const ModalProjectDesc = styled.Text`
  font-size: 20px;
  color: #000;
  text-align: center;
`;
const ButtonsLinksArea = styled.View`
  width: 100%;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonLink = styled.TouchableOpacity`
  width: 240px;
  height: 60px;
  background-color: #2c2a45;
  margin-bottom: 20px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`;
const ButtonLinkText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export function ProjectItem({ data }: Props) {
  const [modal, setModal] = useState(false);

  return (
    <Animatable.View
      animation="flipInX"
      style={{
        width: '43%',
        height: 230,
        borderRadius: 40,
        marginVertical: 25,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ProjectName>{data.name}</ProjectName>
      <ImageArea
        onPress={() => {
          setModal(!modal);
        }}
      >
        <ProjectImage source={data.img} resizeMode="contain" />
      </ImageArea>
      <Modal visible={modal} onRequestClose={() => setModal(false)} animationType="fade">
        <ModalProjectNameArea source={data.img} resizeMode="cover">
          <ModalBgName>
            <BackButtonArea onPress={() => setModal(false)}>
              <Icon name="chevron-back" size={25} color="#fff" />
            </BackButtonArea>
            <ModalProjectName>{data.name}</ModalProjectName>
          </ModalBgName>
        </ModalProjectNameArea>
        <ModalProjectDescArea>
          <ModalProjectDesc>{data.desc}</ModalProjectDesc>
        </ModalProjectDescArea>
        <ButtonsLinksArea>
          {data.links.playstore && (
            <ButtonLink>
              <Icon
                name="logo-google-playstore"
                size={25}
                color="#fff"
                style={{ marginHorizontal: 20 }}
              />
              <ButtonLinkText>Ver projeto na PlayStore</ButtonLinkText>
            </ButtonLink>
          )}
          {data.links.github && (
            <ButtonLink onPress={() => Linking.openURL(data.links.github)}>
              <Icon name="logo-github" size={25} color="#fff" style={{ marginHorizontal: 20 }} />
              <ButtonLinkText>Ver projeto no Github</ButtonLinkText>
            </ButtonLink>
          )}
        </ButtonsLinksArea>
      </Modal>
    </Animatable.View>
  );
}
