import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BitMovieDetails from './bit-movie-details.component';

let setup: any;
let initialProps: any;
beforeEach(() => {
  initialProps = {
    poster: '/example.jpeg',
    title: 'Batman the dark knight',
    plot: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    year: 2008,
    rated: '8.5',
    released: '12 Dec 2008',
    runtime: '2 Jam 32 Menit',
    genre: 'Laga/Petualangan',
    actors: 'Christian Bale, Heath Ledger, Gary Oldman',
    writer: 'Christopher Nolan; David S. Goyer'
  }

  setup = render(
    <BitMovieDetails
      {...initialProps}
    />
  );
});

describe("bit-movie-details component", () => {
  it('render it\'s OK', () => {
    /**
     * Checking all props is rendered
     */
    expect(screen.queryByText(initialProps.title)).toBeInTheDocument();
    expect(screen.queryByAltText(initialProps.title)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.plot)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.year)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.rated)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.released)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.runtime)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.genre)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.actors)).toBeInTheDocument();
    expect(screen.queryByText(initialProps.writer)).toBeInTheDocument();
  });

  it('re-render props it\'s OK', () => {
    /**
     * Re-render and update props title to ABC
     */
    const { rerender } = setup;
    rerender(
      <BitMovieDetails
        {...initialProps}
        title={'ABC'}
      />
    );
    expect(screen.queryByText(initialProps.title)).not.toBeInTheDocument();
    expect(screen.queryByText('ABC')).toBeInTheDocument();
  })

  it('fire event-error on image poster for showing default poster it\'s OK', () => {
    /**
     * Checking default source image poster is null-image.png
     */
    const target = screen.getByAltText(initialProps.title);
    fireEvent.error(target);
    expect(target).toHaveAttribute('src', 'null-image.png');
  });
});