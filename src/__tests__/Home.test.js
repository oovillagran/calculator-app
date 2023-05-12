import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home component', () => {
  test('renders the welcome message', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
