import { RootState } from '../../app/store';

export const selectMovieDetailsStatus = (state: RootState) => state.movieDetails.status;
export const selectMovieDetailsById = (id: string) => {
  return (state: RootState) => state.movieDetails.byIds[id] || null;
}