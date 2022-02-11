import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const buttonOnClickHandler = (e) => {
    const button = e.target.textContent;
    switch (button) {
      case '%':
      case '÷':
      case 'x':
      case '-':
      case '+':
        setOperation(button);
        break;
      default:
    }

    const {
      total: newTotal,
      next: newNext,
      operation: newOperation,
    } = calculate({ total, next, operation }, button);

    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

  const buttons = [
    ['AC'],
    ['+/-'],
    ['%'],
    ['÷', 'operator'],
    ['7'],
    ['8'],
    ['9'],
    ['x', 'operator'],
    ['4'],
    ['5'],
    ['6'],
    ['-', 'operator'],
    ['1'],
    ['2'],
    ['3'],
    ['+', 'operator'],
    ['0'],
    ['.'],
    ['=', 'operator'],
  ];

  return (
    <div className="calculator">
      <span className="display">
        {total && next && operation
          ? `${total} ${operation} ${next}`
          : next || total || '0'}
      </span>
      {buttons.map((text) => (
        <button
          onClick={buttonOnClickHandler}
          type="button"
          className={
            text[1]
              ? `calculator_button calculator_button_${text[1]}`
              : 'calculator_button'
          }
          aria-label="calculator_btn"
          key={text[0]}
        >
          {text[0]}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
