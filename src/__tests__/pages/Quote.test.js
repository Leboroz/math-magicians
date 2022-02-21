import { render, screen } from '@testing-library/react';
import Quote from '../../pages/Quote';

describe('Quote', () => {
  test('Render Quote component', () => {
    render(<Quote />);
  });
});
