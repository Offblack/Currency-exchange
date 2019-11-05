import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import CurrencyForm from 'components/molecules/CurrencyForm';
import TransactionForm from 'components/organisms/TransactionForm';
import TransactionsList from 'components/organisms/TransactionsList';
import { store } from 'store';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import TransactionsInfo from 'components/organisms/TransactionsInfo';

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MainTemplate>
        <GlobalStyle />
        <CurrencyForm />
        <TransactionForm />
        <TransactionsList />
        <TransactionsInfo />
      </MainTemplate>
    </ThemeProvider>
  </Provider>
);

export default Root;
