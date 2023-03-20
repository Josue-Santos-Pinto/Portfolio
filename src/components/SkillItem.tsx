import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  data: {
    name: string;
    color: string;
  };
};

const Item = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export function SkillItem({ data }: Props) {
  return (
    <Item>
      {data.name == 'database' || data.name == 'git' ? (
        <MaterialCommunityIcons name={data.name} color={data.color} size={50} />
      ) : (
        <Icon name={data.name} color={data.color} size={50} />
      )}
    </Item>
  );
}
