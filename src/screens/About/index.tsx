import React from 'react';
import * as S from './styles';
import { StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

export function About() {
  return (
    <S.Container>
      <S.Scroller showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <S.HeaderArea>
          <Animatable.Image
            animation="flipInY"
            style={{ width: '70%', height: 260, borderRadius: 160 }}
            source={require('../../assets/images/perfil.jpeg')}
            resizeMode="cover"
          />
          <S.HeaderTitle>Josué Santos Pinto</S.HeaderTitle>
          <S.HeaderSubTitle>Desenvolvedor Mobile - React Native</S.HeaderSubTitle>
        </S.HeaderArea>

        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#fff',
            paddingBottom: 100,
          }}
        >
          <S.AboutItem>
            <S.AboutItemInfoName>Objetivo</S.AboutItemInfoName>
            <S.AboutItemInfoArea style={{}}>
              <S.AboutItemInfoLabel>
                Ingressar em uma empresa que utilize React Native para desenvolvimento de
                aplicativos, aplicar meus conhecimentos em programação, crescer profissionalmente,
                aprender continuamente e trabalhar em equipe com outros desenvolvedores talentosos e
                comprometidos com a excelência técnica.
              </S.AboutItemInfoLabel>
            </S.AboutItemInfoArea>
          </S.AboutItem>

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

          <S.ButtonArea>
            <S.ButtonText>Baixar Curriculo</S.ButtonText>
          </S.ButtonArea>
        </Animatable.View>
      </S.Scroller>
    </S.Container>
  );
}
