qtd = parseInt(prompt("Quantas pessoas vão apresentar?"));
nomes = [];

for (i = 0; i < qtd; i++) {
  nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
  nomes.push(nome);
}

for (i = nomes.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  temp = nomes[i];
  nomes[i] = nomes[j];
  nomes[j] = temp;
}

document.write("<h2>Ordem de apresentação dos grupos:</h2>");
document.write("<ol>");
for (i = 0; i < nomes.length; i++) {
  document.write("<li>" + nomes[i] + "</li>");
}
document.write("</ol>");
