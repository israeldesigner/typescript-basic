/* eslint-disable prettier/prettier */
type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade;
  salario: number;
  corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCYMK = 'Ciano' | 'Magenta' | 'Amarelo' |'Preto';
type CorPreferida = CorRGB | CorCYMK;

const pessoa: Pessoa = {
  nome: 'Israel',
  idade: 30,
  salario:200_000,

}

export function setCorPreferida(pesoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor}
}

export function thisType(this: Date, argumento1: string) {
  console.log(this);
  console.log(argumento1);
}

const thisFunction = thisType.call(new Date(), "eu sou o argumento");
console.log(thisFunction);
console.log(setCorPreferida(pessoa, 'Magenta'));

type TipoPessoa = {
  nome:string;
  sobrenome:string;
  nomeCompleto(): string;
}

interface TrabalhaAnoite {
   trabalha: boolean;
}

export class Funcionario implements TipoPessoa, TrabalhaAnoite{
  constructor(public nome: string, public sobrenome:string, public trabalha: boolean){
    let estaTrabalhando = this.trabalha;
    if(this.nome !== '') estaTrabalhando = false;
  }
  nomeCompleto(): string{
    return `${this.nome} ${this.sobrenome} ${this.trabalha}`;
  }
}

const funcionario = new Funcionario('Israel','Matos', true);
console.log(funcionario.nomeCompleto());
