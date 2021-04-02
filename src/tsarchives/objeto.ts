/* eslint-disable prettier/prettier */
const objetoA: {
  chaveA: string;
  chabeB: string;
  chaveC?: string;
  readonly chaveD: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chabeB: 'Valor B',
  chabeC: 'Valor B',
  chaveD: 'Valor D não muda'
}

objetoA.chaveA = 'outro valor';
objetoA.chaveC = 'outro valor C';

console.log(objetoA);
