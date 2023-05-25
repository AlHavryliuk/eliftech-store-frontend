import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStores } from 'service/elifAPI';

export const getStoresThunk = createAsyncThunk(
  'stores/getStores',
  async (page, { rejectWithValue, dispatch }) => {
    try {
      const { stores } = await getStores(page);
      return stores;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
