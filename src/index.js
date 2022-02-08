import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import Calculator from './components/calculator';

const App = () => <Calculator />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
