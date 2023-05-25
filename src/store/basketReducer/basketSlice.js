import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = { basket: [] };

export const basketSlice = createSlice({
  name: 'stores',
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.basket = [...state.basket, payload];
    },
    removeItem: (state, { payload: removedName }) => {
      state.basket = state.basket.filter(({ name }) => name !== removedName);
    },
    emptyTrash: state => {
      state.basket = [];
    },
    changeCount: (state, { payload }) => {
      const index = state.basket.findIndex(({ name }) => name === payload.name);
      if (index !== -1) {
        state.basket[index].count = payload.count;
        state.basket[index].totalPrice = (
          state.basket[index].price * payload.count
        ).toFixed(2);
      }
    },
  },
});

const persistedConfig = {
  key: `basket`,
  storage,
};

export const { addItem, removeItem, emptyTrash, changeCount } =
  basketSlice.actions;

export const persistedBasketReducer = persistReducer(
  persistedConfig,
  basketSlice.reducer
);
