import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import CurrencyForm from 'components/molecules/CurrencyForm';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CurrencyForm />
  </ThemeProvider>
);

export default Root;
