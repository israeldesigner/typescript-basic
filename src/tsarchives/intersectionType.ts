type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobreNome & TemIdade;
const pessoa: Pessoa = {
  idade: 28,
  nome: 'Israel',
  sobrenome: 'Matos',
};

console.log(pessoa);

export { pessoa };
