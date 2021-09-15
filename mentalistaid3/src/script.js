var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "ACERTOU MIZARAVIII!!!! ";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um numero de 0 a 10";
  } else {
    resultado.innerHTML = "ERRRRROOOOOOOOUUUUUUU!!!!!!! ";
  }
}
