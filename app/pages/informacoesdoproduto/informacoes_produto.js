import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import CardDetalharProduto from "../../components/DetalharProduto";
import { getProduto } from "../../service/Servico";

import { getId } from "../../service/Servico";

export default function InfomacoesProduto({ navigation }) {
  const id = getId();
  const [produto, setProdutos] = useState([]);

  useEffect(() => {
    getProduto(id).then((produto) => {
      console.log(produto);
      setProdutos(produto);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CardDetalharProduto
        id={produto.id}
        foto={produto.foto}
        descricao={produto.descricao}
        nome={produto.nome}
        preco={produto.preco}
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
    backgroundColor: "white",
  },
});
