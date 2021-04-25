import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CardProduto from "../../components/CardProduto";
import {
  PublisherBanner,
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
} from "expo-ads-admob";

import { getProdutos } from "../../service/Servico";

export default function Home({ navigation, route }) {
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
      <PublisherBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        //onDidFailToReceiveAdWithError={this.bannerError}
        //onAdMobDispatchAppEvent={this.adMobEvent}
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
