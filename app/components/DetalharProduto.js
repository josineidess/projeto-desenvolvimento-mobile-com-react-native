import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Paragraph } from "react-native-paper";

export default function Produto(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.foto }} />
      <Text style={styles.nome_produto}>{props.nome}</Text>
      <Text style={styles.preco_produto}>R$ {props.preco}</Text>
      <Paragraph style={styles.descricao_produto}>{props.descricao}</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    top: 15,
  },
  image: {
    width: 300,
    height: 300,
    top: 15,
    padding: 5,
  },
  informacoes: {
    flexDirection: "column",
    paddingLeft: 50,
  },
  nome_produto: {
    color: "black",
    fontSize: 16,
    padding: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  preco_produto: {
    color: "black",
    flexDirection: "column",
    fontSize: 15,
  },
  descricao_produto: {
    color: "#ff0098",
    padding: 30,
    fontSize: 16,
    textAlign: "center",
  },
});
