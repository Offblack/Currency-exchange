import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { store } from 'store';
import { Provider } from 'react-redux';
import ValueSummary from './ValueSummary';

const renderValue = props => {
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ValueSummary {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const wrapper = utils.getByTestId('value-1');
  return { ...utils, wrapper };
};

describe('ValueSummary Component', () => {
  it('renders without crushing', () => {
    const { wrapper } = renderValue();

    expect(wrapper).toBeInTheDocument();
  });
});
