import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function Produto(props) {
  let estrelas = "";

  for (let e = 0; e < props.estrelas; e++) {
    estrelas += "🌟";
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.card}>
          <Card.Cover
            style={styles.image}
            source={{ uri: props.foto }}
          ></Card.Cover>
          <View style={styles.informacoes}>
            <Title style={styles.nome_autor}>{props.nome}</Title>
            <Button onPress={() => props.fucao} title="X"></Button>
            <Text style={styles.comentario}>{props.comentario}</Text>
            <Paragraph style={styles.estrelas}>{estrelas}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
  },
  card: {
    flexDirection: "row",
    paddingRight: "25%",
  },
  image: {
    width: 100,
    height: 100,
  },
  informacoes: {
    flexDirection: "column",
    paddingLeft: "10%",
  },
  nome_autor: {
    color: "black",
    fontSize: 16,
  },
  estrelas: {
    color: "black",
  },
  comentario: {
    color: "blue",
    fontStyle: "italic",
  },
});
