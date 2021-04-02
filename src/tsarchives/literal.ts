/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
let x = 10;
x = 0b1101;
const y = 10;
let a: 100 = 100;

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Matos',
}

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'), pessoa, x, y);


export default 1;
