import * as i from './movie-search.interface';

export const initialState: i.State = {
  status: 'idle',
  page: 1,
  total: 0,
  data: []
}