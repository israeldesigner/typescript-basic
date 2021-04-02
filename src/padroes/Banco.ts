export class Banco{
  private static banco: Banco;
  constructor(
    private agencia: string,
    private conta: string,
    private saldo: number,
  ){}

  static getBanco( agencia: string, conta: string, saldo: number): Banco{
    if(Banco.banco == null) {
      console.log("Retorno Instancia já criada");
      Banco.banco = new Banco(agencia, conta, saldo)
    };
    console.log(`${Banco.banco} banco ja instanciado`)
    return Banco.banco
  }
}

const banco1 = Banco.getBanco('6540','04152-9', 755);
const banco2 = Banco.getBanco('6540','04152-9', 755);
const banco3 = Banco.getBanco('6540','04152-9', 755);
const banco4 = Banco.getBanco('6540','04152-9', 755);
console.log(banco1)
console.log(banco2)
console.log(banco3)
console.log(banco4)

