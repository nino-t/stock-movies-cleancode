import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMoviesAction } from '../../app/movies/movies.action';
import BitMovieCard from '../../components/bit-movie-card/bit-movie-card.component';
import BitInfiniteScrollPagination from '../../components/bit-infinite-scroll-pagination/bit-infinite-scroll-pagination.component';
import { selectAllMovies, selectMoviesPage, selectMoviesStatus, selectTotalMovies, selectTotalMoviesResponse } from '../../app/movies/movies.selector';

const MovieLists: React.FC = () => {
  const dispatch = useAppDispatch();
  const moviePage = useAppSelector(selectMoviesPage);
  const [page, setPage]= React.useState<number>(moviePage);

  React.useEffect(() => {
    dispatch(fetchMoviesAction({
      q: 'Batman',
      page: page
    }));
  }, [dispatch, page]);

  const loadMoreMovies = (nextpage: number): void => {
    setPage(nextpage);
  }

  const results = {
    status: useAppSelector(selectMoviesStatus),
    response: {
      page: page,
      total: useAppSelector(selectTotalMovies),
      totalResponse: useAppSelector(selectTotalMoviesResponse),
      data: useAppSelector(selectAllMovies)  
    }
  }

  return (
    <BitInfiniteScrollPagination
      isLoading={results.status === 'loading'}
      total={results.response.total}
      totalInResponse={results.response.totalResponse}
      page={results.response.page}
      loadMoreHandler={(nextpage) => loadMoreMovies(nextpage)}
    >
      <div className="grid grid-cols-5 gap-x-12 gap-y-6">
        {
          results.response.data.map((movie) => (
            <BitMovieCard
              key={movie.imdbID}
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              handlePosterClick={() => console.log('OK')}
            />
          ))
        }
      </div>
    </BitInfiniteScrollPagination>
  );
}

export default MovieLists;