import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../../pages/Calculator';

describe('Calculator', () => {
  test('Render Calculator component', () => {
    render(<Calculator />);
  });

  test('press a button', () => {
    render(<Calculator />);

    const display = screen.getByTestId('screen');
    fireEvent.click(screen.getByText('1'));

    expect(display.textContent).toBe('1');
  });
});
