import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  CardItem,
  Container,
  Dot,
  EnableDot,
  KnowMoreButton,
  KnowMoreButtonArea,
  KnowMoreButtonText,
  LottieArea,
  SubTitle,
  TextArea,
  Title,
  WelcomeText,
} from './styles';

import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';

import Hi from '../../assets/lottie/hi.json';
import UsingPc from '../../assets/lottie/using-pc.json';

export function Welcome() {
  const firstRun = useRef(true);
  const animation = useRef<any>(null);

  const navigation = useNavigation();

  useEffect(() => {
    const animationFunction = () => {
      if (animation.current) {
        if (firstRun.current) {
          animation.current.play(33, 57);
        }
      }
    };

    animationFunction();
  }, [animation]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Swiper loop={false} dot={<Dot />} activeDot={<EnableDot />}>
        <CardItem>
          <TextArea>
            <Title>Olá, bem vindo ao meu portfólio</Title>
          </TextArea>

          <LottieArea>
            <LottieView source={Hi} loop autoPlay style={{ width: 400, height: 400 }} />
          </LottieArea>
        </CardItem>

        <CardItem>
          <TextArea>
            <Title>Meu nome é Josué</Title>
            <SubTitle>Desenvolvedor Mobile - React Native</SubTitle>
            <WelcomeText>Venha conhecer mais sobre mim</WelcomeText>
          </TextArea>

          <LottieArea>
            <LottieView
              source={UsingPc}
              loop
              autoPlay
              style={{ width: 400, height: 400 }}
              ref={animation}
            />
          </LottieArea>

          <KnowMoreButtonArea>
            <KnowMoreButton
              onPress={() => navigation.reset({ index: 1, routes: [{ name: 'MainTab' }] })}
            >
              <KnowMoreButtonText>Vamos lá</KnowMoreButtonText>
            </KnowMoreButton>
          </KnowMoreButtonArea>
        </CardItem>
      </Swiper>
    </Container>
  );
}
