import calculate from '../../../components/logic/calculate';

describe('calculate', () => {
  test('Performs an operation', () => {
    const operation = {
      total: 8,
      next: 5,
      operation: '+',
    };

    const result = '13';

    expect(calculate(operation, '=').total).toBe(result);

    expect(calculate(operation, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
