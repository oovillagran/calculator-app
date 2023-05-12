import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../components/Navigation';

describe('Navigation component', () => {
  test('Renders the navigation bar', () => {
    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const navBar = container.querySelector('.nav-bar');
    expect(navBar).toBeInTheDocument();
  });

  test('Renders the navigation bar using a snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
