import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Paragraph, Card } from "react-native-paper";

export default function Produto(props) {
  return (
    <View style={styles.container}>
      <Card
        style={styles.cardbox}
        onPress={() => props.navegar.navigate("Informações", { id: props.id })}
      >
        <Card.Content style={styles.card}>
          <Card.Cover
            style={styles.image}
            source={{ uri: props.foto }}
          ></Card.Cover>
          <View style={styles.informacoes}>
            <Title style={styles.nome_produto}>{props.nome}</Title>
            <Paragraph style={styles.preco_produto}>R$ {props.preco}</Paragraph>
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
  cardbox: {
    flexDirection: "row",
    paddingRight: "40%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 90,
  },
  informacoes: {
    flexDirection: "column",
    paddingLeft: 50,
  },
  nome_produto: {
    color: "black",
    fontSize: 16,
  },
  preco_produto: {
    color: "black",
    flexDirection: "column",
  },
});
