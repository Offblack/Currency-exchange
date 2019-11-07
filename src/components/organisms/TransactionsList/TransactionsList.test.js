import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import TransactionsList from './TransactionsList';

const renderTransactionsList = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TransactionsList {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const list = utils.getByTestId('list-1');
  return { ...utils, list };
};

describe('TransactionsList Component', () => {
  it('renders without crushing', () => {
    const { list } = renderTransactionsList();

    expect(list).toBeInTheDocument();
  });
});
