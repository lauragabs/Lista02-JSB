// Solicita ao usuário um valor para N e M
N = parseInt(prompt("Informe um número N:"));
M = parseInt(prompt("Informe um número M:"));

if (!isNaN(N) && N > 0 && !isNaN(M) && M > 0) {
  numeroAleatorio = Math.floor(Math.random() * (M - N + 1)) + N;
  document.write(
    "Número aleatório entre " + N + " e " + M + ": " + numeroAleatorio
  );
} else {
  document.write("Valor inválido para N ou M.");
}
