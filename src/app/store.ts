import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from './movies/movies.reducer';
import movieDetailsReducer from './movie-details/movie-details.reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
