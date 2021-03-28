import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import TabInformacoes from "../tabinfomacoes/tabinformacoes";

import CardProduto from "../../components/CardProduto";

import { getProdutos } from "../../service/Servico";

export default function Home({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos().then((produtos) => {
      console.log(produtos);
      setProdutos(produtos);
    });
  }, []);

  var pegarProduto = ({ item }) => {
    return (
      <CardProduto
        id={item.id}
        navegar={navigation}
        foto={item.foto}
        descricao={item.descricao}
        nome={item.nome}
        preco={item.preco}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={styles.flatlist}
        data={produtos}
        renderItem={pegarProduto}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  flatlist: { top: 15 },
});
