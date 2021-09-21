//           chave.  valor.
var gael = { nome: "gael", vitorias: 8, empates: 3, derrotas: 4, pontos: 0 };
var katyanne = {
  nome: "katyanne",
  vitorias: 2,
  empates: 3,
  derrotas: 4,
  pontos: 0
};

gael.pontos = calculaPontos(gael);
katyanne.pontos = calculaPontos(katyanne);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [gael, katyanne];

function exibeJogadoresTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + " </td>";
    elemento += "<td>" + jogadores[i].vitorias + " </td>";
    elemento += "<td>" + jogadores[i].empates + " </td>";
    elemento += "<td>" + jogadores[i].derrotas + " </td>";
    elemento += "<td>" + jogadores[i].pontos + " </td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vtória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresTela(jogadores);
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  exibeJogadoresTela(jogadores);
}