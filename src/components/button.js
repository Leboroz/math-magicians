import propTypes from 'prop-types';
import React from 'react';

export default class Button extends React.Component {
  render() {
    let { operator } = this.props;
    const { children } = this.props;
    operator = operator
      ? `calculator_button calculator_button_${operator}`
      : 'calculator_button';
    return (
      <button type="button" className={operator} aria-label="calculator_btn">
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: propTypes.string,
  operator: propTypes.string,
};

Button.defaultProps = {
  children: null,
  operator: null,
};
