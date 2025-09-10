// Solicita ao usuário um valor para N
N = parseInt(prompt("Informe um número N:"));
if (!isNaN(N) && N > 0) {
  numeroAleatorio = Math.floor(Math.random() * N) + 1;
  document.write("Número aleatório entre 1 e " + N + ": " + numeroAleatorio);
} else {
  document.write("Valor inválido para N.");
}
