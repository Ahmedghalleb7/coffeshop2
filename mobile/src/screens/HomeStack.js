
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../components/SettingsScreen';
import DetailsScreen from '../components/DetailsScreen';
import HomeStackScreen from '../components/HomeStackScreen';

const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="homeStack"
      screenOptions={{
        tabBarActiveTintColor: '#00512C',
        headerShown:false
      }}
      
    >
      <Tab.Screen
        name="homeStack"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cards-heart-outline" color={color} size={size} />
            ),
          }}
      />
        <Tab.Screen
          name="Notifications"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
      <Tab.Screen
        name="Profile"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})