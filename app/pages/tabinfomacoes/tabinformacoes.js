import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { mudarId } from "../../service/Servico";

import InformacaoProduto from "../informacoesdoproduto/informacoes_produto";
import Comentarios from "../comentarios/comentarios";

const Tab = createBottomTabNavigator();

export default function TabInfomacoes({ navigation, route }) {
  var id = route.params.id;
  console.log(id);
  mudarId(id);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Informações") {
            iconName = "information-circle-outline";
          } else if (route.name === "Comentarios") {
            iconName = "stats-chart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        options={{ title: "Informações" }}
        name="Informações"
        component={InformacaoProduto}
      />
      <Tab.Screen
        options={{ title: "Comentários" }}
        name="Comentarios"
        component={Comentarios}
      />
    </Tab.Navigator>
  );
}
