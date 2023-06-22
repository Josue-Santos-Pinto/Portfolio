import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/Splash';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};
