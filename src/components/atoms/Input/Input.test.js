import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Input from './Input';

const renderInput = props => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Input type="text" name="name" label="name" {...props} />
    </ThemeProvider>,
  );
  const input = utils.getByLabelText(/name/i);

  return { ...utils, input };
};

describe('Input Component', () => {
  it('renders without crushing', () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();
  });

  it('displays proper value', () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Default' } });

    expect(input).toHaveValue('Default');
  });
});
