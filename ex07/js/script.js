numeroDado = Math.floor(Math.random() * 6) + 1;

caminhoImagem = "image/dado" + numeroDado + ".png";
document.write(
  '<img src="' +
    caminhoImagem +
    '" alt="Dado ' +
    numeroDado +
    '" style="width:100px;height:100px;">'
);
