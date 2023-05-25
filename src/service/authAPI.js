import { $privateHost, $publicHost } from './hosts';

export const login = async credential => {
  const { data } = await $publicHost.post(`auth/login`, credential);
  return data;
};

export const googleLogin = async credential => {
  const { data } = await $publicHost.post(`auth/google`, credential);
  return data;
};

export const logout = async () => {
  const { data } = await $privateHost.post(`auth/logout`);
  return data;
};

export const register = async credential => {
  const { data } = await $publicHost.post(`auth/register`, credential);
  return data;
};

export const getCurrent = async () => {
  const { data } = await $privateHost.get(`auth/current`);
  return data;
};

export const patchUserData = async credential => {
  const { data } = await $privateHost.patch(`auth/data`, credential);
  return data;
};
