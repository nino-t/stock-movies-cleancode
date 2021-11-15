import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './movie-details.api';

export const fetchMovieByIdAction = createAsyncThunk(
  `movie-details/fetchMovieById`,
  async (id: string) => {
    const response = await api.fetchMovieById(id);
    return response
  }
)
