import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Title from './Title';

describe('Title Component', () => {
  it('Renders without crushing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title>Hello</Title>
      </ThemeProvider>,
    );
  });

  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Title>Hello</Title>
      </ThemeProvider>,
    );

    getByText('Hello');
  });
});
