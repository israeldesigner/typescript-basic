/* eslint-disable prettier/prettier */
enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO =1000,
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA
}

enum Cores {
  PRETO = 'PRETO',
  BRANCO = 'BRANCO',
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor])
}
escolhaCor(Cores.ROXO);
console.log(Cores.AZUL);
console.log(Cores[0]);
console.log(Cores);
