import React from 'react';
import Button from './button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dysplay: 0 };
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

    const { dysplay } = this.state;

    return (
      <div className="calculator">
        <span className="dysplay">{dysplay}</span>
        {buttons.map((text) => (
          <Button operator={text[1]} key={text[0]}>
            {text[0]}
          </Button>
        ))}
      </div>
    );
  }
}

export default Calculator;
