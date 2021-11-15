import { RootState } from '../../app/store';
import { moviesAdapter } from './movies.reducer';

export const {
  selectById: selectMovieById,
  selectIds: selectMovieIds,
  selectEntities: selectMovieEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies,
} = moviesAdapter.getSelectors((state: RootState) => state.movies);

export const selectMoviesPage = (state: RootState) => state.movies.page;
export const selectMoviesStatus = (state: RootState) => state.movies.status;
export const selectTotalMoviesResponse = (state: RootState) => state.movies.total;