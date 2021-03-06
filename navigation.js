import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import AlbumDetails from "./screen/AlbumDetails";

export default function Navigation() {
  const Stack = createStackNavigator();
  // const screenOptions = {
  //   headerShow: true,
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AlbumDetails" component={AlbumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
