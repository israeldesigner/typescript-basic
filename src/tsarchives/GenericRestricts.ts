type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];
const animal = {
  cor:'Bege',
  vacinas: ['Vacina1','Vacina2'],
  idade:0
}

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
