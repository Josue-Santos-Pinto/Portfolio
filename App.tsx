import React from 'react';
import { Welcome } from './src/screens/Welcome';
import { Theme } from './src/templates/theme';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/routes/MainStack';

export default () => {
  return (
    <NavigationContainer>
      <Theme>
        <MainStack />
      </Theme>
    </NavigationContainer>
  );
};
