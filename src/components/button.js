import propTypes from 'prop-types';

export default function Button(props) {
  let { operator } = props;
  const { children } = props;
  operator = operator
    ? `calculator_button calculator_button_${operator}`
    : 'calculator_button';
  return (
    <button type="button" className={operator} aria-label="calculator_btn">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string,
  operator: propTypes.string,
};

Button.defaultProps = {
  children: null,
  operator: null,
};
