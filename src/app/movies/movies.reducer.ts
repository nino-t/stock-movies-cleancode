import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import * as action from './movies.action';
import * as i from './movies.interface';
import { initialState as initialStateMovies } from './movies.state';

export const moviesAdapter = createEntityAdapter<i.Movie>({
  selectId: (model) => model.imdbID
});

const initialState = moviesAdapter.getInitialState<i.MoviesState>(initialStateMovies);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.fetchMoviesAction.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(action.fetchMoviesAction.fulfilled, (state, action) => {
        state.status = 'idle';
        state.page = action.meta.arg.page;
        state.total = action.payload?.total ?? 0;
        moviesAdapter.upsertMany(state, action.payload?.movies ?? []);
      })
      .addCase(action.fetchMoviesAction.rejected, (state, _action) => {
        state.status = 'failed';
      });
  },
})

export default moviesSlice.reducer