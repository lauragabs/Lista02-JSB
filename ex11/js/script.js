// Sorteia 12 cartas únicas e distribui para 4 jogadores (3 cartas cada)
totalCartas = 27;
cartas = [];
for (i = 1; i <= totalCartas; i++) {
  cartas.push(i);
}
// Embaralha as cartas
for (i = cartas.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  temp = cartas[i];
  cartas[i] = cartas[j];
  cartas[j] = temp;
}

document.write("<h1>Jogue truco:</h1>");
document.write("<h2 style='color:red;'>Cartas sorteadas:</h2>");
for (jogador = 1; jogador <= 4; jogador++) {
  document.write("<h3>Jogador " + jogador + ":</h3>");
  for (c = 0; c < 3; c++) {
    cartaNum = cartas[(jogador - 1) * 3 + c];
    caminho = "image/carta" + cartaNum + ".png";
    document.write(
      '<img src="' +
        caminho +
        '" alt="Carta ' +
        cartaNum +
        '" style="width:100px;margin:5px">'
    );
  }
  document.write("<br>");
}
