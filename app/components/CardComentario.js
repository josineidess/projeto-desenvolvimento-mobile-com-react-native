import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
  View,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";
import { removerComentario } from "../service/Servico";

export default function CardComentario(props) {
  let hid = false;
  let stars = Number(props.estrelas);
  //for (let e = 0; e < props.estrelas; e++) {
  //estrelas += "🌟";
  //}

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.btn}>
          <Button
            color="blue"
            onPress={() =>
              removerComentario(props.idProduto, props.id, props.navigation)
            }
            title="X"
          ></Button>
        </View>
        <Card.Content style={styles.card}>
          <Card.Cover
            style={styles.image}
            source={{ uri: props.foto }}
          ></Card.Cover>
          <View style={styles.informacoes}>
            <Title style={styles.nome_autor}>{props.nome}</Title>
            <Text style={styles.comentario}>{props.comentario}</Text>
            <TouchableOpacity activeOpacity={0.7} disabled={true}>
              <Rating startingValue={stars} style={{ paddingVertical: 10 }} />
            </TouchableOpacity>
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
  btn: {
    left: "93%",
    width: 50,
    height: 50,
    top: "3%",
  },
});
