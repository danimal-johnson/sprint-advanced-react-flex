import React from 'react';
// import { render } from '@testing-library/react';
// import * as rtl from '@testing-library/react';
import ReactDOM from 'react-dom';
// import 'react-testing-library/cleanup-after-each';
// import '@testing-library/react/cleanup-after-each'
import App from './App';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// test('renders the app', () => {
//   const { getByText } = rtl.render(<App />);
//   const linkElement = getByText(/baseball game./i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  render(<App />);
});


// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('Header text is correct', () => {
  const container = render(<App />);
  container.findByText("Women's World Cup - 2019");
});

test('Dark button exists', () => {
  const container = render(<App />);
  container.findByText(/dark mode/i);
});


