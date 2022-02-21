import operate from '../../../components/logic/operate';

describe('Operate', () => {
  const numberOne = '5';
  const numberTwo = '3';
  test('Add', () => {
    const operation = '+';
    const expected = '8';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(expected);
  });

  test('Subtract', () => {
    const operation = '-';
    const expected = '2';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(expected);
  });

  test('Multiply', () => {
    const operation = 'x';
    const expected = '15';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(expected);
  });

  test('Divide', () => {
    const operation = '÷';
    const expected = '1.66666666666666666667';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(expected);
  });

  test('Mod', () => {
    const operation = '%';
    const expected = '2';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe(expected);
  });
});
