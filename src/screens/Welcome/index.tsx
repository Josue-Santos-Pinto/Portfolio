import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';

import * as S from './styles';

import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';

import Hi from '../../assets/lottie/hi.json';
import UsingPc from '../../assets/lottie/using-pc.json';

export function Welcome() {
  const [savePoint, setSavePoint] = useState(false);
  const firstRun = useRef(true);
  const animation = useRef<any>(null);

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
    <S.Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Swiper loop={false} dot={<S.Dot />} activeDot={<S.EnableDot />}>
        <S.CardItem>
          <S.TextArea>
            <S.Title>Olá, bem vindo ao meu portfólio</S.Title>
          </S.TextArea>

          <S.LottieArea>
            <LottieView source={Hi} loop autoPlay style={{ width: 400, height: 400 }} />
          </S.LottieArea>
        </S.CardItem>

        <S.CardItem>
          <S.TextArea>
            <S.Title>Meu nome é Josué</S.Title>
            <S.SubTitle>Desenvolvedor Mobile - React Native</S.SubTitle>
            <S.WelcomeText>Venha conhecer mais sobre mim</S.WelcomeText>
          </S.TextArea>

          <S.LottieArea>
            <LottieView
              source={UsingPc}
              loop
              autoPlay
              style={{ width: 400, height: 400 }}
              ref={animation}
            />
          </S.LottieArea>

          <S.KnowMoreButtonArea>
            <S.KnowMoreButton>
              <S.KnowMoreButtonText>Vamos lá</S.KnowMoreButtonText>
            </S.KnowMoreButton>
          </S.KnowMoreButtonArea>
        </S.CardItem>
      </Swiper>
    </S.Container>
  );
}
