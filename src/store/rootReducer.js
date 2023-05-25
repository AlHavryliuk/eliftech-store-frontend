import { combineReducers } from '@reduxjs/toolkit';
import storesReducer from './storesReducer/storesSlice';
import { persistedThemeReducer } from './themeReducer/themeSlice';
import { persistedBasketReducer } from './basketReducer/basketSlice';
import { persistedAuthReducer } from './authReducer/authSlice';

export const rootReducer = combineReducers({
  theme: persistedThemeReducer,
  basket: persistedBasketReducer,
  auth: persistedAuthReducer,
  stores: storesReducer,
});
