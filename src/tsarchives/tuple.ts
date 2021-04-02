/* eslint-disable prettier/prettier */
const dadosCliente: [number, string] = [1, 'sou a string'];
const dadosCliente2: [number, string, ...string[]] = [1, 'sou a string', 'novas'];
dadosCliente[0] = 157;
dadosCliente[1] = '200';
dadosCliente2[4] = 'Teste 4'
console.log(dadosCliente);
console.log(dadosCliente2);

// readonly array
const array1: readonly string[] = ['dana ', 'garcia'];
const array2: ReadonlyArray<string> = ['franco', 'reyes'];

console.log(array1);
console.log(array2);

