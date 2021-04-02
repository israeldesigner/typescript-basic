import { Pessoa } from '../tsarchives/Pessoa';

//cria um método estático  apartir da própria classe cria um novo Objeto
export class PessoaStatic {
  static idadePadrao: number = 0;
  static cpfPadrao: string = '000.000.000-00';

  constructor(
    public nome: string,
    public sobreNome: string,
    public idade: number,
    public cpf: string
  ){}

  static criaPessoa(nome: string, sobrenome: string): PessoaStatic {
    return new PessoaStatic(nome, sobrenome, PessoaStatic.idadePadrao, PessoaStatic.cpfPadrao);
  }
}

const pessoa = new PessoaStatic('Israel', 'Matos', 38, '989.470.603-72');
const pessoa2 = PessoaStatic.criaPessoa('Ana','Maria');
console.log(pessoa2);
