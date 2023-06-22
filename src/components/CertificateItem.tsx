import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

type Props = {
  Title: 'Certificados' | 'Diplomas';
};

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
`;

const Area = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
const ItemBody = styled.View`
  flex: 1;
`;
const PlatformArea = styled.View`
  width: 100%;
  height: 40px;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const EducationTitleArea = styled.View`
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
const EducationTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const CertificateName = styled.Text``;

export function CertificateItem({ Title }: Props) {
  const certificates = [
    { name: 'Algoritmos e Lógica', hours: 7.5 },
    { name: 'HTML5 & CSS3', hours: 89 },
    { name: 'Javascript', hours: 44 },
    { name: 'React Native', hours: 107 },
    { name: 'Typescript', hours: 20 },
    { name: 'Banco de Dados', hours: 20 },
    { name: 'Git/GitHub', hours: 20 },
  ];

  const length = certificates.length;
  return (
    <Container>
      <TopArea>
        <Area>{Title}</Area>
      </TopArea>
      {Title.toLowerCase() === 'certificados' &&
        certificates.map((item, index) => (
          <ItemBody key={index}>
            <PlatformArea style={{ borderBottomWidth: length === index + 1 ? 0 : 1 }}>
              <CertificateName>{item.name}</CertificateName>
              <CertificateName>{item.hours} Horas</CertificateName>
            </PlatformArea>
          </ItemBody>
        ))}

      {Title.toLowerCase() === 'diplomas' && (
        <>
          <EducationTitleArea>
            <EducationTitle>Graduação em Sistemas de Informação</EducationTitle>
            <EducationTitle>Estácio de SÁ, Cabo Frio</EducationTitle>
            <EducationTitle style={{ fontSize: 15, color: '#bbb' }}>
              Jan - 2019 / Jul - 2023
            </EducationTitle>
          </EducationTitleArea>
        </>
      )}
    </Container>
  );
}
