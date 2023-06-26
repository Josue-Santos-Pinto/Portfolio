import React from 'react';
import { ScrollView, Text } from 'react-native';
import * as S from './styles';

import { CertificateItem } from '../../components/CertificateItem';

export function Certificate() {
  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <Text style={{ fontFamily: 'Sriracha-Regular', fontSize: 25, color: '#aaa' }}>
            Formação
          </Text>
        </S.HeaderArea>
        <S.BodyArea>
          <CertificateItem Title="Certificados" />
          <CertificateItem Title="Diplomas" />
        </S.BodyArea>
      </ScrollView>
    </S.Container>
  );
}
