import request from '../../utils/request';
import * as i from './movie-details.interface';

export const fetchMovieById = async (id: string) => {
  try {
    const response: any = await request.get('/', {
      params: {
        i: id
      }
    });

    const results : i.MovieDetail = response?.data ?? null;
    return results;
  } catch (error) {
    return Promise.reject(error);
  }
}