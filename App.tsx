import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import MainStack from './src/routes/MainStack';
import { Welcome } from './src/screens/Welcome';
import MainTab from './src/routes/MainTab';

export function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <MainTab />
    </NavigationContainer>
  );
}
