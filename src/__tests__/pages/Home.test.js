import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('App', () => {
  test('Render App component', () => {
    render(<Home />);
  });
});
