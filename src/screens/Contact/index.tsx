import React from 'react';
import { Linking } from 'react-native';
import * as S from './styles';

export function Contact() {
  return (
    <S.Container>
      <S.ContactTitleArea>
        <S.ContactTitle>Contate-me</S.ContactTitle>
      </S.ContactTitleArea>
      <S.ContactItem
        onPress={() => Linking.openURL('https://www.linkedin.com/in/josuesantospinto/')}
      >
        <S.ContactImg source={require('../../assets/images/linkedin.png')} resizeMode="cover" />
      </S.ContactItem>
      <S.ContactItem onPress={() => Linking.openURL('https://github.com/Josue-Santos-Pinto')}>
        <S.ContactImg source={require('../../assets/images/github.png')} resizeMode="cover" />
      </S.ContactItem>
      <S.ContactItem
        onPress={() => Linking.openURL('https://www.instagram.com/josue_zubs/?hl=pt-br')}
      >
        <S.ContactImg source={require('../../assets/images/instagram.png')} resizeMode="cover" />
      </S.ContactItem>
    </S.Container>
  );
}
