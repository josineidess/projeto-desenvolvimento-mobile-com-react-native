import React from "react";
import { StyleSheet, LogBox, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
  PublisherBanner,
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
} from "expo-ads-admob";
import Home from "./pages/home/home";
import TabInformacoes from "./pages/tabinfomacoes/tabinformacoes";
import { Button } from "react-native-paper";
import { enviar_comentario } from "./pages/cadastro/cadastro";
import CadastroComentario from "./pages/cadastro/cadastro";

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

function aparecerBotao(route, navigation) {
  const rota = getFocusedRouteNameFromRoute(route) ?? "Informações";
  switch (rota) {
    case "Informações":
      return null;
    case "Comentarios":
      return (
        <Button onPress={() => navigation.navigate("Cadastro", navigation)}>
          <Ionicons name="add-circle-outline" size={30} />
        </Button>
      );
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
        options={({ route, navigation }) => ({
          headerTitle: getTitulo(route),
          headerRight: () => aparecerBotao(route, navigation),
        })}
        name="Informações"
        component={TabInformacoes}
      />
      <Stack.Screen
        name="Cadastro"
        options={{
          title: "Adicionar Comentário",
        }}
        component={CadastroComentario}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  LogBox.ignoreAllLogs();
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
