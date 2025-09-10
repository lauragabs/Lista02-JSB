opcoes = ["pedra", "papel", "tesoura"];

imagens = ["image/pedra.png", "image/papel.png", "image/tesoura.png"];

document.write("<h2>Joquempô</h2>");

indiceJogador1 = Math.floor(Math.random() * 3);
document.write(
  `Jogador 1: ${opcoes[indiceJogador1]}<br><img src='${imagens[indiceJogador1]}' alt='${opcoes[indiceJogador1]}' style='width:100px'><br>`
);

indiceJogador2 = Math.floor(Math.random() * 3);
document.write(
  `Jogador 2: ${opcoes[indiceJogador2]}<br><img src='${imagens[indiceJogador2]}' alt='${opcoes[indiceJogador2]}' style='width:100px'><br>`
);

resultado = "";
if (indiceJogador1 == indiceJogador2) resultado = "Empate";
else if (indiceJogador1 == 0) {
  if (indiceJogador2 == 1) resultado = "Jogador 2 ganhou";
  else if (indiceJogador2 == 2) resultado = "Jogador 1 ganhou";
} else if (indiceJogador1 == 1) {
  if (indiceJogador2 == 0) resultado = "Jogador 1 ganhou";
  else if (indiceJogador2 == 2) resultado = "Jogador 2 ganhou";
} else if (indiceJogador1 == 2) {
  if (indiceJogador2 == 0) resultado = "Jogador 2 ganhou";
  else if (indiceJogador2 == 1) resultado = "Jogador 1 ganhou";
}

document.write("<h3>" + resultado + "</h3>");
