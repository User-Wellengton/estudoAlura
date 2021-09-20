var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/6/69/Top_Gun_poster.png",
  "https://upload.wikimedia.org/wikipedia/pt/d/d5/American_Sniper.jpg",

  "https://upload.wikimedia.org/wikipedia/pt/a/a0/GameofThrones.png"
];

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src= " + listaFilmes[indice] + ">");
}
