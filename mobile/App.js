import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeStackScreen from './components/HomeStackScreen';
// import SettingsStackScreen from './components/SettingsStackScreen';
import Login from "./src/screens/Login.js";
import { NativeBaseProvider } from "native-base";
import Onboard from "./src/screens/Onboard.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/screens/SignUp.js";
import Home from "./src/screens/HomeStack.js";
import {Provider } from "react-redux"
import store from "./store/store.js";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="onboard" screenOptions={{headerShown:false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="onboarding"component={Onboard}/>
          <Stack.Screen name="homepage"component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}
