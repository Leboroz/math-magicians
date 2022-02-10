import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.buttonOnClickHandler = this.buttonOnClickHandler.bind(this);
  }

  buttonOnClickHandler(e) {
    const button = e.target.textContent;
    switch (button) {
      case '%':
      case '÷':
      case 'x':
      case '-':
      case '+':
        this.setState({ operation: button }, () => this.state);
        break;
      default:
    }
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, button));
  }

  render() {
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

    const { total, next, operation } = this.state;

    return (
      <div className="calculator">
        <span className="display">
          {total && next && operation
            ? `${total} ${operation} ${next}`
            : next || total || '0'}
        </span>
        {buttons.map((text) => (
          <button
            onClick={this.buttonOnClickHandler}
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
  }
}

export default Calculator;
