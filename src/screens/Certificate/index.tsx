import React from 'react';
import { ScrollView } from 'react-native';
import * as S from './styles';

import * as Animatable from 'react-native-animatable';
import { CertificateItem } from '../../components/CertificateItem';

const certificates = [
  { name: 'Algoritmos e Lógica', hours: 7.5, platform: 'udemy' },
  { name: 'HTML5 & CSS3', hours: 89, platform: 'b7web' },
  { name: 'Javascript', hours: 44, platform: 'b7web' },
  { name: 'Typescript', hours: 20, platform: 'b7web' },
  { name: 'React Native', hours: 107, platform: 'b7web' },
  { name: 'Banco de Dados', hours: 20, platform: 'b7web' },
  { name: 'Git/GitHub', hours: 20, platform: 'b7web' },
];

export function Certificate() {
  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <S.HeaderTitle>Certificados</S.HeaderTitle>
        </S.HeaderArea>
        <S.BodyArea>
          {certificates.map((item, key) => (
            <CertificateItem key={key} data={item} />
          ))}
        </S.BodyArea>
      </ScrollView>
    </S.Container>
  );
}
