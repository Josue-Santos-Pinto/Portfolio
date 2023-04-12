import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  data: {
    name: string;
    color: string;
  };
};

export function SkillItem({ data }: Props) {
  return (
    <View
      style={{
        width: 130,
        height: 130,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}
    >
      {data.name == 'database' || data.name == 'git' ? (
        <MaterialCommunityIcons name={data.name} color={data.color} size={50} />
      ) : (
        <Icon name={data.name} color={data.color} size={50} />
      )}
    </View>
  );
}
