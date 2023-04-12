import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

type Props = {
  data: {
    name: string;
    hours: number;
    platform: string;
  };
};

const ImageArea = styled.View`
  height: 100%;
  width: 150px;
  justify-content: center;
  align-items: center;
`;
const PlatformImage = styled.Image`
  width: 130px;
  height: 130px;
`;
const InfoArea = styled.View`
  flex: 1;
  justify-content: space-around;
`;
const CertificateName = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #2c2a45;
`;
const CertificateHours = styled.Text`
  font-size: 18px;
  color: #2c2a45;
`;

export function CertificateItem({ data }: Props) {
  return (
    <Animatable.View
      animation="flipInX"
      style={{
        width: '95%',
        height: 160,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        flexDirection: 'row',

        margin: 10,
      }}
    >
      <ImageArea>
        {data.platform == 'b7web' ? (
          <PlatformImage source={require('../assets/images/b7_logo.png')} resizeMode="contain" />
        ) : (
          <PlatformImage source={require('../assets/images/Udemy-Logo.png')} resizeMode="contain" />
        )}
      </ImageArea>
      <InfoArea>
        <CertificateName>{data.name}</CertificateName>
        <CertificateHours>{data.hours} Horas</CertificateHours>
      </InfoArea>
    </Animatable.View>
  );
}
