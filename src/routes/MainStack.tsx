import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};
