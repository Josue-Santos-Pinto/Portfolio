import React from 'react';
import { StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Certificate } from '../screens/Certificate';
import { About } from '../screens/About';
import { Contact } from '../screens/Contact';
import { Skills } from '../screens/Skills';
import { Projects } from '../screens/Projects';
import Icon from 'react-native-vector-icons/FontAwesome';

type TopTabNavigator = {
  About: undefined;
  Skills: undefined;
  Certificate: undefined;
  Projects: undefined;
  Contact: undefined;
};

const Tab = createMaterialTopTabNavigator<TopTabNavigator>();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="About"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Icon name="user" size={22} color={focused ? 'green' : '#272727'} />;
          },
          tabBarLabelStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Skills"
        component={Skills}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Icon name="code" size={22} color={focused ? 'green' : '#272727'} />;
          },
          tabBarLabelStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Certificate"
        component={Certificate}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Icon name="home" size={22} color={focused ? 'green' : '#272727'} />;
          },
          tabBarLabelStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Icon name="home" size={22} color={focused ? 'green' : '#272727'} />;
          },
          tabBarLabelStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
};
