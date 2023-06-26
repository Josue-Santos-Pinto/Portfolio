import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Linking, ImageBackground } from 'react-native';
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
      const url = await storage().ref('Curriculoreactnative.docx').getDownloadURL();
      setLink(url);
    };
    getUrl();
  }, []);

  return (
    <S.Container>
      <ImageBackground
        source={require('../../assets/images/lampada.jpg')}
        resizeMode="cover"
        style={{ height: '100%', width: '100%' }}
      >
        <S.Scroller showsVerticalScrollIndicator={false}>
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

          {/*<Animatable.View
          delay={600}
          animation="fadeInUp"
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#fff',
            paddingBottom: 100,
          }}
        >
          <S.AboutItem>
            <S.AboutItemInfoName>Formação</S.AboutItemInfoName>
            <S.AboutItemInfoValue style={{ textAlign: 'center', fontSize: 18, marginTop: 10 }}>
              Sistemas de Informação - 8 periodo
            </S.AboutItemInfoValue>
            <S.AboutItemInfoArea></S.AboutItemInfoArea>
            <S.AboutItemInfoArea>
              <S.AboutItemInfoLabel>Faculdade: </S.AboutItemInfoLabel>
              <S.AboutItemInfoValue>Estácio de SÁ - Cabo Frio</S.AboutItemInfoValue>
            </S.AboutItemInfoArea>
            <S.AboutItemInfoArea>
              <S.AboutItemInfoLabel>Turno: </S.AboutItemInfoLabel>
              <S.AboutItemInfoValue>Noite</S.AboutItemInfoValue>
            </S.AboutItemInfoArea>
            <S.AboutItemInfoArea>
              <S.AboutItemInfoLabel>Conclusão: </S.AboutItemInfoLabel>
              <S.AboutItemInfoValue>2023.1</S.AboutItemInfoValue>
            </S.AboutItemInfoArea>
          </S.AboutItem>

          <S.AboutItem>
            <S.AboutItemInfoName>Idiomas</S.AboutItemInfoName>

            <S.AboutItemInfoArea>
              <S.AboutItemInfoLabel>Inglês: </S.AboutItemInfoLabel>
              <S.AboutItemInfoValue>Intermediário</S.AboutItemInfoValue>
            </S.AboutItemInfoArea>
            <S.AboutItemInfoArea>
              <S.AboutItemInfoLabel>Portugês: </S.AboutItemInfoLabel>
              <S.AboutItemInfoValue>Nativo</S.AboutItemInfoValue>
            </S.AboutItemInfoArea>
          </S.AboutItem>

          <S.ButtonArea onPress={() => Linking.openURL(link)}>
            <S.ButtonText>Baixar Curriculo</S.ButtonText>
          </S.ButtonArea>
        </Animatable.View>*/}
        </S.Scroller>
      </ImageBackground>
    </S.Container>
  );
}
