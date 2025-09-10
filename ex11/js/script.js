// Sorteia 12 cartas únicas e distribui para 4 jogadores (3 cartas cada)
var totalCartas = 27;
var cartas = [];
for (var i = 1; i <= totalCartas; i++) {
  cartas.push(i);
}
// Embaralha as cartas
for (var i = cartas.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = cartas[i];
  cartas[i] = cartas[j];
  cartas[j] = temp;
}

document.write("<h1>Jogue truco:</h1>");
document.write("<h2 style='color:red;'>Cartas sorteadas:</h2>");
for (var jogador = 1; jogador <= 4; jogador++) {
  document.write("<h3>Jogador " + jogador + ":</h3>");
  for (var c = 0; c < 3; c++) {
    var cartaNum = cartas[(jogador - 1) * 3 + c];
    var caminho = "/image/carta" + cartaNum + ".png";
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
