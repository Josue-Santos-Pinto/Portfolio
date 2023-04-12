import React from 'react';
import { Linking } from 'react-native';
import * as S from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
export function Contact() {
  return (
    <S.Container>
      <S.ContactTitleArea>
        <S.ContactTitle>Contate-me</S.ContactTitle>
      </S.ContactTitleArea>
      <S.ContactItem
        onPress={() => Linking.openURL('https://www.linkedin.com/in/josuesantospinto/')}
      >
        <Icon name="logo-linkedin" size={80} color="#0073b1" />
      </S.ContactItem>
      <S.ContactItem onPress={() => Linking.openURL('https://github.com/Josue-Santos-Pinto')}>
        <Icon name="logo-github" size={80} color="black" />
      </S.ContactItem>
      <S.ContactItem
        onPress={() => Linking.openURL('https://www.instagram.com/josue_zubs/?hl=pt-br')}
      >
        <Icon name="logo-instagram" size={80} color="purple" />
      </S.ContactItem>
    </S.Container>
  );
}
