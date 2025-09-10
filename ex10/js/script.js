totalCartas = 27;
numeroCarta = Math.floor(Math.random() * totalCartas) + 1;
caminho = "/image/carta" + numeroCarta + ".png";

document.write("<h2>Carta sorteada:</h2>");
document.write(
  '<img src="' +
    caminho +
    '" alt="Carta ' +
    numeroCarta +
    '" style="width:150px">'
);
