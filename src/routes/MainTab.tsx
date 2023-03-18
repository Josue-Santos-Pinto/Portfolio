import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Certificate } from '../screens/Certificate';
import { About } from '../screens/About';
import { Contact } from '../screens/Contact';
import { Skills } from '../screens/Skills';
import { Projects } from '../screens/Projects';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="About"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#171626',
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 4,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="person" size={size + 7} color={color} />;
            }
            return <Icon name="person-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Skills"
        component={Skills}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="code-slash" size={size + 7} color="red" />;
            }
            return <Icon name="code-slash-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Certificate"
        component={Certificate}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="certificate" size={size + 10} color="purple" />;
            }
            return <MaterialCommunityIcons name="certificate-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="lightbulb-on" size={size + 7} color="yellow" />;
            }
            return <MaterialCommunityIcons name="lightbulb-on-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="md-mail" size={size + 7} color="#fff" />;
            }
            return <Icon name="md-mail-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
