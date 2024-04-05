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



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="onboard"component={Onboard}/>
          <Stack.Screen name="home"component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
