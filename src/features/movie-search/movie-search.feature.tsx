import React from 'react';
import useQuery from '../../utils/use-query';
import reducer from './movie-search.reducer';
import { useHistory } from 'react-router-dom';
import { initialState } from './movie-search.state';
import { fetchMovies } from '../../app/movies/movies.api';
import BitMovieCard from '../../components/bit-movie-card/bit-movie-card.component';
import BitInfiniteScrollPagination from '../../components/bit-infinite-scroll-pagination/bit-infinite-scroll-pagination.component';

const MovieSearch: React.FC = () => {
  const query = useQuery();
  const history = useHistory();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const keyword = query.get('q') || '';
  const page = Number(query.get('page') || 1);

  React.useEffect(() => {
    if (keyword) {
      dispatch({ type: 'request' });
      fetchMovies({
        q: keyword,
        page: page
      })
      .then((response) => {
        dispatch({
          type: 'success',
          payload: {
            page: page,
            total: response?.total ?? 0,
            data: response?.movies ?? []
          }
        })
      })
      .catch(() => {
        dispatch({ type: 'failure'});
      });
    }
  }, [keyword, page]);

  return (
    <BitInfiniteScrollPagination
      isLoading={state.status === 'loading'}
      total={state.data.length}
      totalInResponse={state.total}
      page={state.page}
      loadMoreHandler={(nextpage) => {
        history.push(`/search?q=${keyword}&page=${nextpage}`);
      }}
    >
      <div className="grid grid-cols-5 gap-x-12 gap-y-6">
        {
          state.data.map((movie) => (
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

export default MovieSearch;