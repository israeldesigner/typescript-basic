export class CarrinhoCompras{
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void{
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number{
    return  this.produtos.length;
  }

  valorTotal(): number{
    let totalProd = this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    let convertFixed = Number(totalProd.toFixed(2));
    return convertFixed;
  }
}

export class Produto{
  constructor(
    public nome: string,
    public preco: number
  ){}
}

const produot1 = new Produto('Camiseta', 49.99);
const produot2 = new Produto('Caneca', 24.99);
const produot3 = new Produto('Calça', 149.99);
const magazineCarrinho = new CarrinhoCompras();
magazineCarrinho.inserirProdutos(produot1, produot2, produot3);
console.log(magazineCarrinho.valorTotal());
