import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const icons = {
  home: require('../assets/home.png'),
  settings: require('../assets/settings.png'),
  profile: require('../assets/profile.png'),
};

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = icons.home;
          } else if (route.name === 'Settings') {
            iconName = icons.settings;
          } else if (route.name === 'Profile') {
            iconName = icons.profile;
          }

          const iconSize = Math.min(size, 28);

          return <Image source={iconName} style={{ width: iconSize, height: iconSize }} tintColor={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Settings') {
            label = 'Settings ';
          } else if (route.name === 'Profile') {
            label = 'Profile ';
          }

          return (
            <Text style={{ color: color, fontSize: 12, textAlign: 'center', marginBottom: 3 }}>
              {label}
            </Text>
          );
        },
      })}
    
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      
    </Tab.Navigator>
  );
}
