/**
 * Genera un número entero aleatorio entre el mínimo y el máximo especificado
 * @param {Number} min número mínimo que puede salir (inclusivo)
 * @param {Number} max número máximo que puede salir (inclusivo)
 */
export const randInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export function aleatorioConProbs(probs, ops) {
  const max = probs.reduce((acc, red) => acc + red);
  const num = randInt(0, max);
  let suma = 0;
  let lastIndex = probs.length - 1;
  for (var i = 0; i < lastIndex; ++i) {
    suma += probs[i];
    if (num < suma) {
      return ops[i];
    }
  }
  return ops[lastIndex];
}


export function id(chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', length = 8){
  let res = ''
  for (let i = 0; i < length; i++) {
    res += chars.charAt(randInt(0, chars.length));  
  }
  return res
}