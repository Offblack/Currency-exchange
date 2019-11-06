import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import CurrencyForm from 'components/molecules/CurrencyForm/CurrencyForm';
import TransactionForm from 'components/organisms/TransactionForm/TransactionForm';
import TransactionsList from 'components/organisms/TransactionsList/TransactionsList';
import { store } from 'store';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import TransactionsInfo from 'components/organisms/TransactionsInfo/TransactionsInfo';

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MainTemplate>
        <GlobalStyle />
        <div>
          <CurrencyForm />
          <TransactionForm />
          <TransactionsInfo />
        </div>
        <TransactionsList />
      </MainTemplate>
    </ThemeProvider>
  </Provider>
);

export default Root;
