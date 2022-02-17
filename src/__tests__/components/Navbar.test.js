import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('Render Navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
});
