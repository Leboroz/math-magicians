import { render, screen } from '@testing-library/react';
import App from '../app';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('Render App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
