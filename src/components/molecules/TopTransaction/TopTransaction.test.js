import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import TopTransaction from './TopTransaction';

const renderTopTransaction = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TopTransaction {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const top = utils.getByTestId('top-1');
  return { ...utils, top };
};

describe('TopTransaction Component', () => {
  it('renders without crushing', () => {
    const { top } = renderTopTransaction();

    expect(top).toBeInTheDocument();
  });
});
