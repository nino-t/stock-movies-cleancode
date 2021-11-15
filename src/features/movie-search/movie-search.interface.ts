import { Movie } from '../../app/movies/movies.interface';

export type State = {
  status: 'loading' | 'idle' | 'failed',
  page: number,
  total: number,
  data: Movie[]
}

export type Action =
  | { type: 'request' }
  | {
    type: 'success', payload: {
      page: number,
      total: number,
      data: Movie[]
    }
  }
  | { type: 'failure' };