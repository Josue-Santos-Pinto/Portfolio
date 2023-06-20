import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  area: string;
};

const mobileSkills = [
  require('../assets/images/techs/react-native.png'),
  require('../assets/images/techs/javascript.png'),
  require('../assets/images/techs/typescript.png'),
  require('../assets/images/techs/redux.png'),
  require('../assets/images/techs/styled-components.png'),
  require('../assets/images/techs/tailwind.png'),
];
const backendSkills = [
  require('../assets/images/techs/node.png'),
  require('../assets/images/techs/firebase.png'),
  require('../assets/images/techs/mysql.png'),
  require('../assets/images/techs/prisma.png'),
];

const Container = styled.View`
  flex: 1;
  min-height: 100px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 20px;
  flex-direction: column;
`;

const TopArea = styled.View`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const Area = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const IconsArea = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const IconImageArea = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;
const IconImgs = styled.Image`
  width: 70%;
  height: 70%;
`;

export function SkillItem({ area }: Props) {
  return (
    <Container>
      <TopArea>
        <Area>{area}</Area>
      </TopArea>
      <IconsArea>
        {area.toLocaleLowerCase() === 'mobile' &&
          mobileSkills.map((item, index) => (
            <IconImageArea key={index}>
              <IconImgs source={item} resizeMode="contain" />
            </IconImageArea>
          ))}

        {area.toLocaleLowerCase() === 'backend' &&
          backendSkills.map((item, index) => (
            <IconImageArea key={index}>
              <IconImgs source={item} resizeMode="contain" />
            </IconImageArea>
          ))}
      </IconsArea>
    </Container>
  );
}
