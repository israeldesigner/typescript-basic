type MeuTipo = number;

const arrayNumeros: Array<number> = [1,2.5,3];
console.log(arrayNumeros);

async function promisseAsync() {
  return 1;
}

function minhaPromisse(): Promise<MeuTipo> {
  return new Promise((resolve, resject) =>{
    setTimeout(() => {
      resolve(1);
    }, 1000);
  })
}

promisseAsync().then( resultado => console.log(resultado + 1));
minhaPromisse().then( resultado => console.log(resultado + 1));
