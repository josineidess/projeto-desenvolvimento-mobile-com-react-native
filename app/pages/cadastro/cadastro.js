import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { cadastrarComentario } from "../../service/Servico";
import { getId } from "../../service/Servico";
import { useFocusEffect } from "@react-navigation/native";

export default function CadastroComentario(props) {
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput style={styles.input} onChangeText={setNome} value={nome} />

      <Text>comentario</Text>
      <TextInput
        style={styles.input}
        onChangeText={setComentario}
        value={comentario}
      />

      <Button
        title="Cadastrar"
        onPress={() =>
          cadastrarComentario(
            {
              id: getId(),
              idProduto: getId(),
              nome: nome,
              foto: "https://image.flaticon.com/icons/png/512/16/16410.png",
              comentario: comentario,
              estrelas: 4,
            },
            props.navigation
          )
        }
      >
        Postar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: 25,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
