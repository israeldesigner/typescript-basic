export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ){}

  public getIdade(): number{
    return this.idade;
  }
  public getCpf(): string {
    return this.cpf;
  }

  public getNomeComp(): string{
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public matricula: string,
  ){
    super(nome, sobrenome, idade, cpf);
  }
  public getNomeComp(): string{
    return `Matrícula: 27578575 | ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  getNomeComp(): string{
    console.log("Pegando função supeor");
    return super.getNomeComp();
  }
}

const pessoa  =   new Pessoa('Israel', 'Matos', 25, '67845712347');
const aluno   =   new Aluno('Israel', 'Matos', 38, '98947060372', '4574-5');
const cliente =   new Cliente('Ana', 'Doria', 52, '02857050321');

console.log(pessoa.getNomeComp());
console.log(aluno.getNomeComp());
console.log(cliente.getNomeComp());
