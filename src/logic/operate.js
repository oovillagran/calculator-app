import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = numberOne ? Big(numberOne) : Big(0);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
