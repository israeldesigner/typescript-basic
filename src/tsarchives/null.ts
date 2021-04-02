/* eslint-disable prettier/prettier */
export function createPerson(firstName: string, lastName?: string): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x:any) {
  if(typeof x === 'number') return x * x;
  return null
}
const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

console.log(squareOfString);
