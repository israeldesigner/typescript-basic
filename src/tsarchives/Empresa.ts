export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Coloborador[] = [];
  private readonly empregados: Empregado[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string){
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public addColoborador(coloborador: Coloborador): void {
    this.colaboradores.push(coloborador);
  }

  public addEmpregado(empregado: Empregado): void {
    this.empregados.push(empregado);
  }

  public showEmpregados (): void{
    for(const empregado of this.empregados){
      console.log(empregado);
    }
  }

  public showColoboradores (): void{
    for (const coloborador of this.colaboradores) {
      console.log(coloborador);
    }
  }

  public getNome(): string {
    return this.nome;
  }
};

export class Coloborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ){}
}

export class Empregado {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ){}
}

export class Udemy extends Empresa {
  constructor(){
    super('udemy', '13.111,115/0001-50');
  }

  popUdemyColoborador(): Coloborador | null {
    const coloborador = this.colaboradores.pop();
    if(coloborador) return coloborador;
    return null
  }
}

const empresa1 = new Udemy();
const coloborador1 = new Coloborador('Israel', 'Matos');
const coloborador2 = new Coloborador('João', 'Vieira');
const coloborador3 = new Coloborador('Anastacio', 'Luis');
const empregado1 = new Empregado('Israel', 'Matos');
empresa1.addEmpregado(empregado1);
empresa1.addColoborador(coloborador1);
empresa1.addColoborador(coloborador2);
empresa1.addColoborador(coloborador3);
console.log(empresa1.getNome());
empresa1.popUdemyColoborador();
empresa1.showColoboradores();
