import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import Home from "./pages/home/home";
import TabInformacoes from "./pages/tabinfomacoes/tabinformacoes";

const Stack = createStackNavigator();

function getTitulo(route) {
  const rota = getFocusedRouteNameFromRoute(route) ?? "Informações";

  switch (rota) {
    case "Informações":
      return "Informações";
    case "Comentarios":
      return "Comentários";
  }
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="Produtos"
    >
      <Stack.Screen name="Produtos" component={Home} />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: getTitulo(route),
        })}
        name="Informações"
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
