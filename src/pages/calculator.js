import { motion } from 'framer-motion';
import React, { useState } from 'react';
import calculate from '../components/logic/calculate';
import styles from '../sass/components/calculator.module.scss';

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

  const {
    calculator,
    calculator_button: calculatorButton,
    calculator_button_operator: calculatorButtonOperator,
    display,
    container,
  } = styles;

  return (
    <section className={`${styles['padding-x']} ${styles['padding-top']}`}>
      <motion.div
        key="calculator"
        initial={{ x: '10%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={container}
      >
        <h2 className={styles['display-2']}>Lets do some math</h2>
        <div className={calculator}>
          <span className={display}>
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
                  ? `${calculatorButton} ${calculatorButtonOperator}`
                  : calculatorButton
              }
              aria-label="calculator_btn"
              key={text[0]}
            >
              {text[0]}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Calculator;
