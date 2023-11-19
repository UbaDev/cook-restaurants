// StackNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchMapStack from "./stacks/SearchMapStack";
import SearchMapNearStack from "./stacks/SearchMapNearStack";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchMapStack"
        component={SearchMapStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchMapNearStack"
        component={SearchMapNearStack}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default HomeNavigator;
