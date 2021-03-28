import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";

import Home from "./pages/home/home";
import TabInformacoes from "./pages/tabinfomacoes/tabinformacoes";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="Produtos"
    >
      <Stack.Screen name="Produtos" component={Home} />
      <Stack.Screen
        options={{ title: "Informações" }}
        name="TabInformacoes"
        component={TabInformacoes}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
