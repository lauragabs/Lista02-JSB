// Gera e mostra 6 números únicos da mega sena (1 a 60)
vet = [];

for (i = 0; i < 60; i++) {
  vet[i - 1] = i;
}

for (j = 0; j < 6; j++) {
  //Sorteia um numero aleatorio entre 0 e 59
  indiceVetor = Math.floor(Math.random() * vet.length);
  nroSorte = vet[indiceVetor];
  document.write(nroSorte + " ");

  //remover elemento sorteado
  vet.splice(indiceVetor, 1);
}
