import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOrders, postOrder } from 'service/elifAPI';
import { successSwal } from 'utils/notification/swal';

export const getOrdersThunk = createAsyncThunk(
  'orders/getOrders',
  async (page, { rejectWithValue }) => {
    try {
      const { orders } = await getOrders(page);
      return orders;
    } catch (error) {
      const { status } = error.response;
      const { message } = error;
      return rejectWithValue({ message, status });
    }
  }
);

export const postOrdersThunk = createAsyncThunk(
  'orders/postOrders',
  async (data, { rejectWithValue }) => {
    try {
      const orders = await postOrder(data);
      successSwal('Success', 'Order is created successfully');
      return orders;
    } catch (error) {
      const { status } = error.response;
      const { message } = error;
      return rejectWithValue({ message, status });
    }
  }
);
