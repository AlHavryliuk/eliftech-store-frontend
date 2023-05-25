import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  getCurrentUserThunk,
  googleLoginThunk,
  loginUserThunk,
  logoutUserThunk,
  patchUserDataThunk,
  registerUserThunk,
} from './authOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import { getOrdersThunk } from 'store/ordersReducer/orderOperations';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(googleLoginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(googleLoginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(googleLoginThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(getCurrentUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.user = null;
      })

      // After Registration change Address || Phone Number

      .addCase(patchUserDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchUserDataThunk.fulfilled, (state, { payload }) => {
        state.user = {
          ...state.user,
          address: payload.address,
          phoneNumber: payload.phoneNumber,
        };
        state.isLoading = false;
      })
      .addCase(patchUserDataThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      // Add 'orders' data to User object

      .addCase(getOrdersThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrdersThunk.fulfilled, (state, { payload }) => {
        state.user.orders = payload;
        state.isLoading = false;
      })
      .addCase(getOrdersThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

const persistedConfig = {
  key: `auth`,
  storage,
  whitelist: ['user'],
};

export const persistedAuthReducer = persistReducer(
  persistedConfig,
  authSlice.reducer
);
