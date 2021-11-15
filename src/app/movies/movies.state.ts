import * as i from './movies.interface';

export const initialState: i.MoviesState = {
  status: 'idle',
  page: 1,
  total: 0
}