import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrent,
  googleLogin,
  login,
  logout,
  patchUserData,
  register,
} from 'service/authAPI';
import { successSwal } from 'utils/notification/swal';

export const registerUserThunk = createAsyncThunk(
  'auth/postRegisterUser',
  async (credential, { rejectWithValue, dispatch }) => {
    try {
      const { email, password } = credential;
      const result = await register(credential);
      dispatch(loginUserThunk({ email, password }));
      return result;
    } catch (error) {
      const { message } = error.response.data;
      return rejectWithValue(message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/postLoginUser',
  async (credential, { rejectWithValue }) => {
    try {
      const userData = await login(credential);
      successSwal('Success', 'Login is successful');
      return userData;
    } catch (error) {
      const { message } = error.response.data;
      return rejectWithValue(message);
    }
  }
);

export const googleLoginThunk = createAsyncThunk(
  'auth/postGoogleLoginUser',
  async (credential, { rejectWithValue }) => {
    try {
      const userData = await googleLogin({ credential });
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/postLogoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getCurrent();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchUserDataThunk = createAsyncThunk(
  'auth/patchUserData',
  async (credential, { rejectWithValue }) => {
    try {
      const result = await patchUserData(credential);

      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
