import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BitMovieCard from './bit-movie-card.component';

beforeEach(() => {
  global.alert = jest.fn();
  render(
    <BrowserRouter>
      <BitMovieCard
        id={'xyz'}
        poster={'/my-poster.png'}
        title={'Batman the dark knight'}
        year={'2008'}
        type={'Movie'}
        handlePosterClick={() => alert('OK!')}
      />

      <Switch>
        <Route exact path='/' component={() => <p>Welcome!</p>} />
        <Route path='/watch' component={() => <p>Watch!</p>} />
      </Switch>
    </BrowserRouter>
  );
});

describe("bit-movie-card component", () => {
  it('render it\'s OK', () => {
    /**
     * Check main props it's already rendered
     */
    expect(screen.queryByText('Batman the dark knight')).toBeInTheDocument();
    expect(screen.queryByAltText('Batman the dark knight')).toHaveAttribute('src', '/my-poster.png');
    expect(screen.queryByText('Movie, 2008')).toBeInTheDocument();
  });

  it('fire event-error on image poster for showing default poster it\'s OK', () => {
    const target = screen.getByAltText('Batman the dark knight');
    fireEvent.error(target);
    expect(target).toHaveAttribute('src', 'null-image.png');
  });

  it('fire event-clicked poster it\'s OK', () => {
    /**
     * Fire user-event and running handler image poster clicked
     */
    const target = screen.getByAltText('Batman the dark knight');
    expect(target).toBeInTheDocument();
    userEvent.click(target);
    expect(global.alert).toHaveBeenCalled();
  });

  it('page movement it\'s OK', () => {
    /**
     * Check position is in root path
     */
    expect(screen.queryByText('Welcome!')).toBeInTheDocument();

    /**
     * Fire click title of movie and moving to watch page
     */
    const target = screen.getByText('Batman the dark knight');
    userEvent.click(target);
    expect(screen.queryByText('Watch!')).toBeInTheDocument();
  });
});
