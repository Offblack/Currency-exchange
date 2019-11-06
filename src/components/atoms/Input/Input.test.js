import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Input from './Input';

describe('Button Component', () => {
  it('Renders without crushing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>,
    );
  });
});
