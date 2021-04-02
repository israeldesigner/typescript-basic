/* eslint-disable @typescript-eslint/no-unused-vars */
const voidReturn = (...args: string[]): void => {
  console.log(args.join(''));
};

const pessoa = {
  nome: 'Isr',
  sobrenome: 'mat',
  exibirNome(): void {
    console.log(this.nome + '' + this.sobrenome);
  },
};

voidReturn('Israel', 'Matos');
pessoa.exibirNome();

export default { pessoa };
