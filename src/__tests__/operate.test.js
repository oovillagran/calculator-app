import operate from '../logic/operate';

describe('Unit tests for operate.js', () => {
  test('add 5 + 7 to equal 12', () => {
    expect(operate(5, 7, '+')).toBe('12');
  });

  test('subtract 15 - 29 to equal -14', () => {
    expect(operate(15, 29, '-')).toBe('-14');
  });

  test('multiply 15 x 20 to equal 300', () => {
    expect(operate(15, 20, 'x')).toBe('300');
  });

  test('divide 5 / 2 to equal 2.5', () => {
    expect(operate(5, 2, '÷')).toBe('2.5');
  });

  test('divide a number by 0, show error', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('module 5 / 2 to equal 1', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });
});
