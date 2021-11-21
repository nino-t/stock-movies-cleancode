import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import WatchPage from './watch.page';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <WatchPage />
      </BrowserRouter>
    </Provider>
  );
});

describe("watch page", () => {
  it('render is\'s OK', () => {
    expect(screen.queryByTestId('watch-page-indicator')).toBeInTheDocument();
  });
});