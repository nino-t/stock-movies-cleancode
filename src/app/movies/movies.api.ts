import request from '../../utils/request';
import * as i from './movies.interface';

export const fetchMovies = async (args: i.fetchMoviesArgs) => {
  try {
    const response: any = await request.get('/', {
      params: {
        s: args.q,
        type: 'movie',
        page: args.page
      }
    });

    type Results = { total: number, movies: i.Movie[] };
    let results: Results = {
      total: Number(response?.data?.totalResults ?? 0),
      movies: response?.data?.Search ?? []
    };

    return results;
  } catch (error) {
    return Promise.reject(error);
  }
}