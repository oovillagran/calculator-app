import calculate from '../logic/calculate';

describe('Unit tests for calculate.js', () => {
  test('resets total, next, and operation to null when AC button is clicked', () => {
    const calculatorData = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const newData = calculate(calculatorData, 'AC');
    expect(newData).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should link a new number', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '7');
    expect(result).toEqual({ total: '10', next: '57', operation: '+' });
  });

  test('should link a new number when next is 0', () => {
    const result = calculate({ total: '10', next: '0', operation: '+' }, '7');
    expect(result).toEqual({ total: '10', next: '7', operation: '+' });
  });

  test('should show a decimal number', () => {
    const result = calculate({ total: '10', next: '0', operation: '-' }, '.');
    expect(result).toEqual({ total: '10', next: '0.', operation: '-' });
  });

  test('should handle plus/minus button when there is a next', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });

  test('should handle x button when there is a next', () => {
    const result = calculate({ total: '12', next: '5', operation: 'x' }, '=');
    expect(result).toEqual({ total: '60', next: null, operation: null });
  });

  test('should handle ÷ button when there is a next', () => {
    const result = calculate({ total: '100', next: '25', operation: '÷' }, '=');
    expect(result).toEqual({ total: '4', next: null, operation: null });
  });

  test('should handle plus/minus button when there is a total', () => {
    const result = calculate({ total: '10', next: null, operation: null }, '+/-');
    expect(result).toEqual({ total: '-10', next: null, operation: null });
  });

  test('should handle operation button when there is no next or total', () => {
    const input = { total: null, next: null, operation: null };
    const expectedOutput = { operation: '+' };
    const actualOutput = calculate(input, '+');
    expect(actualOutput).toEqual(expectedOutput);
  });

  test('should handle equals button when there is no next or operation', () => {
    const result = calculate({ total: '10', next: null, operation: null }, '=');
    expect(result).toEqual({});
  });

  test('should handle equals button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });
});
