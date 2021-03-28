import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import CardComentario from "../../components/CardComentario";

import { getComentarios } from "../../service/Servico";

import { getId } from "../../service/Servico";
import { mudarTitulo } from "../../service/Servico";

export default function Comentarios({ navigation }) {
  const id = getId();
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    getComentarios(id).then((comentarios) => {
      console.log(comentarios);
      setComentarios(comentarios);
    });
  }, []);

  var pegarProduto = ({ item }) => {
    return (
      <CardComentario
        id={item.id}
        foto={item.foto}
        comentario={item.comentario}
        nome={item.nome}
        estrelas={item.estrelas}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={styles.flatlist}
        data={comentarios}
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
    backgroundColor: "#7B68EE",
  },
  flatlist: { top: 5 },
});
