import { pessoa } from './intersectionType';

export class PessoGet {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ){
    this.cpf = _cpf;
    Object.freeze(this);
  }

  get Nome(): string{
    return this.nome;
  }
  set cpf(cpf: string){
    this._cpf = cpf;
  }
  get cpf(): string{
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa1 = new PessoGet('Israel', 'Matos', 42, '989.470.603-72');
pessoa1.cpf = '000.000.000-99'
console.log(pessoa1.cpf);
