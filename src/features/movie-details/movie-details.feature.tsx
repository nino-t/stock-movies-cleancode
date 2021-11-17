import React from 'react';
import useQuery from '../../utils/use-query';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BitLoading from '../../components/bit-loading/bit-loading.component';
import { fetchMovieByIdAction } from '../../app/movie-details/movie-details.action';
import BitMovieDetails from '../../components/bit-movie-details/bit-movie-details.component';
import { selectMovieDetailsById, selectMovieDetailsStatus } from '../../app/movie-details/movie-details.selector';

const MovieDetails: React.FC = () => {
  const query = useQuery();
  const dispatch = useAppDispatch();
  const movieId = query.get('v') || '';

  const results = {
    movie: useAppSelector(selectMovieDetailsById(movieId)),
    status: useAppSelector(selectMovieDetailsStatus)
  }

  React.useEffect(() => {
    if (!results.movie) {
      dispatch(fetchMovieByIdAction(movieId));
    }
  }, [dispatch, movieId, results.movie]);

  return (
    <React.Fragment>
      <BitLoading isLoading={results.status === 'loading'} />
      {
        results.status === 'idle' && results.movie &&
          <BitMovieDetails
            title={results.movie.Title}
            poster={results.movie.Poster}
            plot={results.movie.Plot}
            year={Number(results.movie.Year)}
            rated={results.movie.Rated}
            released={results.movie.Released}
            runtime={results.movie.Runtime}
            genre={results.movie.Genre}
            actors={results.movie.Actors}
            writer={results.movie.Writer}
          />
      }
    </React.Fragment>
  );
}

export default MovieDetails;