import { createSelector } from 'reselect';
import { token } from 'service/hosts';
import { decodeURL } from 'utils/formatterURL/formatterURL';

export const select = {
  darkMode: state => state.theme.darkMode,

  user: state => state.auth.user,
  authIsLoading: state => state.auth.isLoading,

  stores: state => state.stores.stores,
  storesIsLoading: state => state.stores.isLoading,

  basket: state => state.basket.basket,
};

export const reselect = {
  basketSize: createSelector([select.basket], basket => basket.length),
  authCompleted: createSelector([select.user], user => {
    if (user?.token.length > 0) {
      token.set(user.token);
      return true;
    }
    return false;
  }),
  chosenStore: createSelector([select.basket], basket => {
    if (basket.length > 0) {
      return decodeURL(basket[0].storeName);
    }
    return null;
  }),
};
