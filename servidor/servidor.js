const http = require("http");
const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;

const produtos = [
  {
    id: "1",
    nome: "Caneca Corvinal",
    preco: "39.90",
    descricao:
      "Caneca personalizada de porcelana com estampa da Casa Corvinal de Hogwarts.",
    foto:
      "https://cdn.awsli.com.br/600x450/180/180275/produto/8278523/b2885c6b0b.jpg",
  },
  {
    id: "2",
    nome: "Almofada Hogwarts",
    preco: "49.90",
    descricao: "Alfofada com estampa de hogwarts, tamanho 40x40 cm.",
    foto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXumBTZtaIz9isWZ1d44H_eJuPTXlIf266zhe2IWxjM0k8lPAV_0Lu_qweQzICQ9bDbmlmLHQ&usqp=CAc",
  },
  {
    id: "3",
    nome: "Jaqueta Sonserina",
    preco: "239.90",
    descricao: "Jaqueta Harry Potter Sonserina (Verde) Moletom College",
    foto:
      "https://img.elo7.com.br/product/zoom/26D2591/jaqueta-harry-potter-sonserina-verde-moletom-college.jpg",
  },
  {
    id: "4",
    nome: "Cachecol Lufa-Lufa",
    preco: "49.90",
    descricao: "Modelo unissex Cachecol da Lufa-Lufa",
    foto:
      "https://cdn.awsli.com.br/600x450/8/8751/produto/27219552/a8b0c4c503.jpg",
  },
  {
    id: "5",
    nome: "Capinha Grifinória",
    preco: "45.90",
    descricao: "Capinha para celular samsung A20 da Grifinória",
    foto:
      "https://jbacessorios.com.br/3199-medium_default/capinha-para-celular-grifinoria.jpg",
  },
];

const usuarios = [
  {
    id: 1,
    nome: "Rúbeo Hagrid",
    foto:
      "https://static.wikia.nocookie.net/enciclopotterpedia/images/d/dc/Rubeushagrid.png/revision/latest/scale-to-width-down/340?cb=20141214132015&path-prefix=pt-br",
  },
  {
    id: 2,
    nome: "Alvo Dumbledore",
    foto:
      "https://pm1.narvii.com/6291/4bb4937b44867819ddff5bbaeb44b238ca74fb16_hq.jpg",
  },
  {
    id: 3,
    nome: "Gina Weasley",
    foto:
      "https://i.pinimg.com/474x/ac/c5/f3/acc5f384f292daf68c240589d855f683.jpg",
  },
  {
    id: 4,
    nome: "Fred Weasley",
    foto:
      "https://uploads.spiritfanfiction.com/fanfics/historias/202012/como-conquistar-um-weasley-em-60-dias-21231765-121220202154.jpg",
  },
  {
    id: 5,
    nome: "Horácio Slughorn",
    foto:
      "https://i.pinimg.com/originals/68/3c/12/683c123abbf2c9f4e12383122a20f5a6.jpg",
  },
  {
    id: 6,
    nome: "Sirius Black",
    foto:
      "https://i.pinimg.com/originals/fa/16/6e/fa166ee361323806e6f70bafe57b48ef.jpg",
  },
];

var comentarios = [
  {
    id: "1",
    idProduto: "5",
    foto:
      "https://i.pinimg.com/originals/41/28/aa/4128aa390d522d59783f8c88c424ef12.jpg",
    nome: "Hermione Granger",
    comentario:
      "Essa capinha não veio com feitiço de extensão, não coube no meu celular!",
    estrelas: "2",
  },
  {
    id: "2",
    idProduto: "1",
    foto:
      "https://4.bp.blogspot.com/-uR5GyeOU4NQ/WFGKtf1eVqI/AAAAAAAAMYQ/y9SBB-tTnp8XDIm9dYb9jx9JD4YGkmKWwCLcB/s1600/Lunaimg01.jpg",
    nome: "Luna Lovegood",
    comentario: "Essa caneca está cheia de nargoless, mas é muito bonita",
    estrelas: 3,
  },
  ,
  {
    id: "3",
    idProduto: "3",
    foto:
      "http://2.bp.blogspot.com/-zQKGAN1hvKQ/TbMJvmWqMrI/AAAAAAAAAOg/ST0SYOkF3TY/s1600/Draco-Malfoy-tom-felton-110815_580_787.jpg",
    nome: "Draco Malfoy",
    comentario:
      "Que tecido horrível, meu pai poderia ter me dado coisa melhor!",
    estrelas: 1,
  },
  {
    id: "4",
    idProduto: "3",
    foto:
      "https://i.pinimg.com/originals/fe/ae/34/feae34c4950c97c5ade353ac5f61677f.jpg",
    nome: "Harry Potter",
    comentario: "Eu só comprei esse casaco porque Draco tem um igual...",
    estrelas: 4,
  },
  {
    id: "5",
    idProduto: "2",
    foto:
      "https://static.wikia.nocookie.net/newojesed/images/6/61/Minerva.jpg/revision/latest?cb=20110424214417&path-prefix=pt-br",
    nome: "Minerva McGonagall",
    comentario: "Ótima almofada de sofá, decoração linda!",
    estrelas: 5,
  },
  {
    id: "6",
    idProduto: "4",
    foto:
      "https://veja.abril.com.br/wp-content/uploads/2016/09/animais-fantasticos-trailer.jpg?quality=70&strip=info&w=750",
    nome: "Newt Scammander",
    comentario:
      "Que bom que pude comprar esse cachecol, quando eu estudava em Hogwarts roubaram o meu...",
    estrelas: 5,
  },
  {
    id: "7",
    idProduto: "1",
    foto:
      "https://i.pinimg.com/originals/fc/02/8e/fc028e23aa5c267e29a13ce3cec7a509.jpg",
    nome: "Cho Chang",
    comentario:
      "Essa caneca é bastante boa, ao contrário do que a Luna disse não vejo narloss nenhum...",
    estrelas: 4,
  },
  {
    id: "8",
    idProduto: "5",
    foto:
      "http://pm1.narvii.com/6475/bb3528bb8983b013b71739156a5bd63682302cc4_00.jpg",
    nome: "Neville LongBottom",
    comentario: "Eu adorei a capa, pena que perdi no primeiro dia...",
    estrelas: 5,
  },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello word!");
});

app.get("/c", (req, res) => {
  res.send("Testando cors");
});

app.get("/produtos", (req, res) => {
  res.send(produtos);
});

app.get("/produtos/:id", function (req, res) {
  produtos.forEach((element) => {
    if (element.id == req.params.id) {
      res.send(element);
    }
  });
});

app.get("/produtos/:id/comentarios", function (req, res) {
  var coment = [];
  comentarios.forEach((element) => {
    if (element.idProduto == req.params.id) {
      coment.push(element);
    }
  });
  res.send(coment);
});

app.post("/produtos/:id/comentarios", (req, res) => {
  console.log(req.body);
  const novo_comentario = req.body;
  novo_comentario.id = String(comentarios.length + 1);
  novo_comentario.idProduto = String(req.params.id);
  comentarios.push(novo_comentario);
  res.status(200).send(produtos);
});

app.delete("/produtos/:id/comentarios/:idcomentario", (req, res) => {
  comentarios = comentarios.filter((comentario) => comentario.id != req.params.idcomentario);
  console.log("Comentario apagado!");
  res.send(comentarios);
});

app.listen(port, () => {
  console.log("Servidor online");
});
