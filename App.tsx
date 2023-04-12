import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './src/routes/MainStack';
import { Welcome } from './src/screens/Welcome';

export function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
