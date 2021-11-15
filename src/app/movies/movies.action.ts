import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './movies.api';
import * as i from './movies.interface';

export const fetchMoviesAction = createAsyncThunk(
  `movies/fetchMovies`,
  async (args: i.fetchMoviesArgs) => {
    const response = await api.fetchMovies(args);
    return response
  }
)
