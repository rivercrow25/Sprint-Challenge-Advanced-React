import React from 'react';
import { render } from "@testing-library/react"
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  const thing = getByText(/womens world cup/i)
});
