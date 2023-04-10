import React from 'react';
import {Welcome} from './src/screens/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
