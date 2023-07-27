import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Linking, ImageBackground, ScrollView, Dimensions, View } from 'react-native';
import storage from '@react-native-firebase/storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function About() {
  const [link, setLink] = useState('');
  const linkedin = 'https://www.linkedin.com/in/josuesantospinto/';
  const github = 'https://github.com/Josue-Santos-Pinto';

  const bDate = new Date(1999, 11, 28);
  const currentDate = new Date();

  let diferenceDate = currentDate.getTime() - bDate.getTime();

  let diferenceYears = Math.floor(diferenceDate / (1000 * 60 * 60 * 24 * 365));

  useEffect(() => {
    const getUrl = async () => {
      const url = await storage().ref('Currículo - Josué Santos.pdf').getDownloadURL();
      setLink(url);
    };
    getUrl();
  }, []);

  return (
    <S.Container>
      <ImageBackground
        source={require('../../assets/images/lampada.jpg')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%', flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, width: '100%' }}>
            <S.HeaderArea>
              <S.HeaderSubTitle>Olá, eu sou o Josué</S.HeaderSubTitle>
              <S.HeaderTitle>Desenvolvedor</S.HeaderTitle>
              <S.HeaderTitle>React Native</S.HeaderTitle>
              <S.HeaderSubTitle>
                Tenho {diferenceYears} anos sou um desenvolvedor mobile com 7 meses de experiência
                como freelancer
              </S.HeaderSubTitle>
            </S.HeaderArea>

            <S.SocialMediaArea>
              <S.SocialMediaItem onPress={() => Linking.openURL(github)}>
                <FontAwesome name="github" color="#d1bf8c" size={50} />
              </S.SocialMediaItem>
              <S.SocialMediaItem onPress={() => Linking.openURL(linkedin)}>
                <FontAwesome name="linkedin-square" color="#d1bf8c" size={50} />
              </S.SocialMediaItem>
              <S.SocialMediaItem onPress={() => Linking.openURL(link)}>
                <FontAwesome name="file-text" color="#d1bf8c" size={40} />
              </S.SocialMediaItem>
            </S.SocialMediaArea>
          </View>
        </ScrollView>
      </ImageBackground>
    </S.Container>
  );
}
