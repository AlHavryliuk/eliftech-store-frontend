import { createSlice } from '@reduxjs/toolkit';
import { getStoresThunk } from './storesOperations';

const initialState = { stores: null, isLoading: false, error: null };

export const storesSlice = createSlice({
  name: 'stores',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getStoresThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStoresThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stores = action.payload;
      })
      .addCase(getStoresThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const storesReducer = storesSlice.reducer;
export default storesReducer;
