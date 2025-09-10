// Coleta nomes e idades dos passageiros
nomes = [];
idades = [];

qtd = parseInt(prompt("Quantas pessoas vão no ônibus?"));

for (i = 0; i < qtd; i++) {
  nome = prompt("Digite o nome do passageiro " + (i + 1) + ":");
  idade = parseInt(prompt("Digite a idade de " + nome + ":"));

  nomes.push(nome);
  idades.push(idade);
}

// Calcula a média das idades
soma = 0;
for (i = 0; i < qtd; i++) {
  soma += idades[i];
}
media = soma / qtd;

// Sorteia um nome
sorteado = nomes[Math.floor(Math.random() * qtd)];

document.write("Idade média dos passageiros: " + media.toFixed(2) + "<br>");
document.write("Sorteado para ganhar o almoço: " + sorteado);
