import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Container } from './styles';
import PortfolioLogo from '../../components/PortfolioLogo';

export function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 1, routes: [{ name: 'MainTab' }] });
    }, 2000);
  }, []);

  return (
    <Container>
      <Animated.View entering={FadeIn}>
        <PortfolioLogo />
      </Animated.View>
    </Container>
  );
}
