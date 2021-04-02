/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
let nome: string = 'Israel';
let idade: number = 10; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol

//arrays
let arrayNumbers: Array<number> = [1,2,3,4,5,6,7,8];
let arrayStrings: Array<string> = ['javascript','es6','typescript','angular','vue'];
let arrayDeStrings2: string[] = ['a', 'b'];
let pessoaTypes: {nome: string, idade: number, adulto?: boolean} = {
    nome:'Israel Matos',
    idade:38,
    adulto: true
}

const soma = function(x:number, y:number):number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x,y) => x + y
