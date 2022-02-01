import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('Test', () => {
  it('render learn react link', () => {
    const { getByText } = render(<App />);
    const linkELement = getByText(/Learn React/i);
    expect(linkELement).toBeInTheDocument();
  });
});
