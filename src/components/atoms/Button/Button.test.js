import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from './Button';

describe('Button Component', () => {
  it('Renders without crushing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Remove</Button>
      </ThemeProvider>,
    );
  });

  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Remove</Button>
      </ThemeProvider>,
    );

    getByText('Remove');
  });
});
