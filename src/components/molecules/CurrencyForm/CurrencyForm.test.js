import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import CurrencyForm from './CurrencyForm';

const renderCurrencyForm = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CurrencyForm {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const form = utils.getByTestId('form-1');
  return { ...utils, form };
};

describe('CurrencyForm Component', () => {
  it('renders without crushing', () => {
    const { form } = renderCurrencyForm();

    expect(form).toBeInTheDocument();
  });
});
