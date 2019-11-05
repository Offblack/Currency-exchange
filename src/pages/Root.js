import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import CurrencyForm from 'components/molecules/CurrencyForm';
import TransactionForm from 'components/organisms/TransactionForm';
import TransactionsList from 'components/organisms/TransactionsList';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CurrencyForm />
    <TransactionForm />
    <TransactionsList />
  </ThemeProvider>
);

export default Root;
