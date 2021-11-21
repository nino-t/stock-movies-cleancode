import { rest } from 'msw';
import { baseUrl } from '../utils/request';

const mockFetchMovies = {
  'Search': [
    {
      'Title': 'Batman v Superman: Dawn of Justice',
      'Year': '2016',
      'imdbID': 'tt2975590',
      'Type': 'movie',
      'Poster': 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    },
    {
      'Title': 'Batman',
      'Year': '1989',
      'imdbID': 'tt0096895',
      'Type': 'movie',
      'Poster': 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg'
    },
    {
      'Title': 'Batman Returns',
      'Year': '2016',
      'imdbID': 'tt2975591',
      'Type': 'movie',
      'Poster': 'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg'
    }
  ],
  'totalResults': 3,
  'Response': 'True'
};

const getFetchMoviesPath = `${baseUrl}/`;

const fetchMoviesHandler = rest.get(getFetchMoviesPath, async (_req, res, ctx) =>
  res(ctx.json(mockFetchMovies))
);

export const fetchMoviesException = rest.get(
  getFetchMoviesPath,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);

export const handlers = [fetchMoviesHandler];