import { createSlice } from '@reduxjs/toolkit';
import * as action from './movie-details.action';
import { initialState } from './movie-details.state';

const moviesSlice = createSlice({
  name: 'movie-details',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.fetchMovieByIdAction.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(action.fetchMovieByIdAction.fulfilled, (state, action) => {
        state.status = 'idle';
        state.byIds[action.meta.arg] = action.payload;
      })
      .addCase(action.fetchMovieByIdAction.rejected, (state, action) => {
        state.status = 'failed';
      })
  },
})

export default moviesSlice.reducer