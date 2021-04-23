import axios from "axios";

export async function getProdutos() {
  const produtos = await axios.get("http://192.168.0.106:3000/produtos");
  return produtos.data;
}

export async function getProduto(id) {
  const produtos = await axios.get("http://192.168.0.106:3000/produtos/" + id);
  return produtos.data;
}

export async function getComentarios(id) {
  const produtos = await axios.get(
    "http://192.168.0.106:3000/produtos/" + id + "/comentarios"
  );
  return produtos.data;
}

export async function cadastrarComentario(comentario, navigation) {
  const comentarios = await axios.post(
    "http://192.168.0.106:3000/produtos/" + id + "/comentarios",
    comentario
  );
  console.log("comentario postado");
  navigation.navigate("Comentarios");
  return comentarios.data;
}

export async function removerComentario(id, idcomentario) {
  console.log(id);
  const apagar = await axios.delete(
    "http://192.168.0.106:3000/produtos/" + id + "/comentarios/" + idcomentario
  );
  console.log(idcomentario);
  return apagar.data;
}

var id = "1";
var idComentario = "1";

export function getId() {
  return id;
}

export function getIdComentario() {
  return idComentario;
}

export function mudarId(novo_id) {
  id = novo_id;
}

export function mudarIdComentario(novo_id) {
  idComentario = novo_id;
}
