import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import MainDrawer from './MainDrawer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
    </Stack.Navigator>
  );
};
