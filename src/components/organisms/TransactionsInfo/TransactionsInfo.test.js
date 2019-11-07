import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import TransactionsInfo from './TransactionsInfo';

const renderTransactionsInfo = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TransactionsInfo {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const info = utils.getByTestId('info-1');
  return { ...utils, info };
};

describe('TransactionsInfo Component', () => {
  it('renders without crushing', () => {
    const { info } = renderTransactionsInfo();

    expect(info).toBeInTheDocument();
  });
});
