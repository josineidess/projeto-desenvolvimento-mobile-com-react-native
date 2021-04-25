import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, RefreshControl, Text, View, FlatList } from "react-native";

import CardComentario from "../../components/CardComentario";

import { getComentarios, removerComentario } from "../../service/Servico";

import { getId } from "../../service/Servico";
import { useFocusEffect } from "@react-navigation/native";

export default function Comentarios({ navigation }) {
  const id = getId();
  const [comentarios, setComentarios] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getComentarios(id).then((comentarios) => {
        console.log(comentarios);
        setComentarios(comentarios);
      });
    }, [])
  );

  var pegarProduto = ({ item }) => {
    return (
      <CardComentario
        id={item.id}
        foto={item.foto}
        comentario={item.comentario}
        nome={item.nome}
        estrelas={item.estrelas}
        //funcao={removerComentario(id, item.id)}
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
