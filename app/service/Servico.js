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

var id = "1";

export function getId() {
  return id;
}

export function mudarId(novo_id) {
  id = novo_id;
}
