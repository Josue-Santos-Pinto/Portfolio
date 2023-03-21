import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

type Props = {
  data: {
    name: string;
    desc: string;
    img: HTMLImageElement;
    techs: string[];
  };
};

const ImageArea = styled.View`
  height: 100%;
  width: 120px;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 5px;
`;
const ProjectImage = styled.Image`
  width: 70%;
  height: 100%;
`;

const ProjectName = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
`;

export function ProjectItem({ data }: Props) {
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
      <ImageArea>
        <ProjectImage source={data.img} resizeMode="contain" />
      </ImageArea>
    </Animatable.View>
  );
}
