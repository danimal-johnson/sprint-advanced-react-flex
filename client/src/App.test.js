import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Header text is correct', () => {
  const container = rtl.render(<App />);
  container.findByText("Women's World Cup - 2019");
});

test('Dark button exists', () => {
  const container = rtl.render(<App />);
  container.findByText(/dark mode/i);
});