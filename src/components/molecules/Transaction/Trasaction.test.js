import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import Transaction from './Transaction';

const renderTransaction = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Transaction {...props} id="1" title="Transakcja" euro={1} pln={4.25} />
      </ThemeProvider>
    </Provider>,
  );
  const wrapper = utils.getByTestId('transaction-1');
  return { ...utils, wrapper };
};

describe('Transaction Component', () => {
  it('renders without crushing', () => {
    const { wrapper } = renderTransaction();

    expect(wrapper).toBeInTheDocument();
  });
});
