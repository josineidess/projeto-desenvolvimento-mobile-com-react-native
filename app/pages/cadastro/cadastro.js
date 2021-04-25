import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { sortear_foto } from "../../service/Servico";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  SectionList,
  Button,
} from "react-native";
import { cadastrarComentario } from "../../service/Servico";
import { getId } from "../../service/Servico";
import { getIdComentario } from "../../service/Servico";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-ratings";
import { pegar_carregamento, mudar_carregamento } from "../../service/Servico";

export default function CadastroComentario(props) {
  if (pegar_carregamento()) {
    mudar_carregamento();
    props.navigation.navigate("Comentarios");
  }

  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [estrelas, setEstrelas] = useState(1);

  function pegar_estrelas(rating) {
    setEstrelas(rating);
  }
  return (
    <View style={styles.container}>
      <Input
        placeholder="Nome"
        leftIcon={<Icon name="user" size={24} color="white" />}
        onChangeText={setNome}
        value={nome}
        style={styles.input}
      />
      <View style={styles.comentarioTxt}>
        <Icon style={{ left: 10 }} name="comments" size={24} color="white" />
        <Text style={{ left: 20, color: "white" }}>Comentário</Text>
      </View>
      <TextInput
        style={styles.caixaComentario}
        onChangeText={setComentario}
        value={comentario}
      />
      <Text style={{ color: "white", left: "40%", top: "2%" }}>Avaliação</Text>

      <Rating
        onFinishRating={pegar_estrelas}
        ratingBackgroundColor="blue"
        style={{ paddingVertical: 10, backgroundColor: "blue", top: "5%" }}
      />
      <View
        style={{
          color: "blue",
          top: "10%",
          width: 150,
          height: 60,
          left: "30%",
        }}
      >
        <Button
          title="Postar"
          color="#191970"
          onPress={() =>
            cadastrarComentario(
              {
                id: getIdComentario(),
                idProduto: getId(),
                nome: nome,
                foto: sortear_foto(),
                comentario: comentario,
                estrelas: estrelas,
              },
              props.navigation
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: 25,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 15,
    backgroundColor: "white",
  },
  comentarioTxt: {
    flexDirection: "row",
  },
  caixaComentario: {
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "white",
  },
});
