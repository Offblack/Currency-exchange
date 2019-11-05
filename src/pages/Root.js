import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import CurrencyForm from 'components/molecules/CurrencyForm';
import TransactionForm from 'components/organisms/TransactionForm';
import TransactionsList from 'components/organisms/TransactionsList';
import { store } from 'store';
import { Provider } from 'react-redux';

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CurrencyForm />
      <TransactionForm />
      <TransactionsList />
    </ThemeProvider>
  </Provider>
);

export default Root;
