import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import TransactionForm from './TransactionForm';

const renderTransactionForm = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TransactionForm {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const form = utils.getByTestId('form-2');
  return { ...utils, form };
};

describe('TransactionForm Component', () => {
  it('renders without crushing', () => {
    const { form } = renderTransactionForm();

    expect(form).toBeInTheDocument();
  });
});
