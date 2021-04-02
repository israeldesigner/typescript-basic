export function multiNumbers(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiNumbers(3, 6, 9);
const concatenacao = concatStrings('a', 'b', 'c');
console.log(result);
console.log(concatenacao);
