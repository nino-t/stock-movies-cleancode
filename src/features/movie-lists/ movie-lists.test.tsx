import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieLists from './movie-lists.feature';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
      <MovieLists />
      </BrowserRouter>
    </Provider>
  );
});

describe('render component', () => {
  it('main component is exists', () => {
    expect(screen.queryByTestId('movie-lists')).toBeInTheDocument();
  });
});

describe('fetch movies api', () => {
  it('mapping videos when redux video', async () => {
    // Arrange

    // Act
    const movies = await screen.findAllByTestId('bit-movie-card');

    // Assert
    expect(movies.length).toBe(3);
  });
});