import React from 'react';

import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

