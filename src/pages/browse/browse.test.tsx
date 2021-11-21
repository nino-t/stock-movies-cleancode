import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BrowsePage from './browse.page';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <BrowsePage />
      </BrowserRouter>
    </Provider>
  );
});

describe("browse page", () => {
  it('render is\'s OK', () => {
    expect(screen.queryByTestId('browse-page-indicator')).toBeInTheDocument();
  });
});