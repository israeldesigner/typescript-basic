export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected atack: number,
    protected life: number
  ){}

  atacar( personagem: Personagem ): void{
    this.bordao();
    personagem.lostLife(this.atack);
  }

  lostLife( forceAtack: number): void{
    this.life -= forceAtack;
    console.log(`${this.emoji} - ${this.nome} está sendo atacado... ${this.life}`)
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem{
  protected emoji = '\u{1F9DD}';
  bordao(): void{
    console.log(`${this.emoji} Avante vingadooooreeesssss`);
  }
}
export class Monstro extends Personagem{
  protected emoji = '\u{1F9DF}';
  bordao(): void{
    console.log(`${this.emoji} Thaaaanoos destroi`);
  }
}

const guerreira = new Guerreira('Mulher hulk', 87, 1000);
const monstro   = new Monstro('Thanos', 120, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
