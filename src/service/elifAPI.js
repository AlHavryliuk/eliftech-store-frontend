import { $privateHost, $publicHost } from './hosts';

export const getStores = async (page = 1) => {
  const { data } = await $publicHost.get('stores', { params: { page } });
  return data;
};

export const getOrders = async (page = 1) => {
  const { data } = await $privateHost.get('orders', { params: { page } });
  return data;
};

export const postOrder = async items => {
  const { data } = await $privateHost.post('orders', items);
  return data;
};
