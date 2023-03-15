import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { About } from '../screens/About';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};
