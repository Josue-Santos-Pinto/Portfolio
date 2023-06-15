import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Certificate } from '../screens/Certificate';
import { About } from '../screens/About';
import { Skills } from '../screens/Skills';
import { Projects } from '../screens/Projects';
import Icon from 'react-native-vector-icons/FontAwesome';
import PortfolioLogo from '../components/PortfolioLogo';

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
    <View style={{ flex: 1 }}>
      <PortfolioLogo />
      <Tab.Navigator
        initialRouteName="About"
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            height: 60,
            justifyContent: 'center',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#1a192b',
          },
          tabBarLabelStyle: { display: 'none' },
        }}
      >
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return <Icon name="user" size={22} color={focused ? '#1a192b' : '#aaa'} />;
            },
          }}
        />
        <Tab.Screen
          name="Skills"
          component={Skills}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return <Icon name="code" size={22} color={focused ? '#1a192b' : '#aaa'} />;
            },
          }}
        />
        <Tab.Screen
          name="Projects"
          component={Projects}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return <Icon name="lightbulb-o" size={22} color={focused ? '#1a192b' : '#aaa'} />;
            },
          }}
        />
        <Tab.Screen
          name="Certificate"
          component={Certificate}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return <Icon name="certificate" size={22} color={focused ? '#1a192b' : '#aaa'} />;
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
