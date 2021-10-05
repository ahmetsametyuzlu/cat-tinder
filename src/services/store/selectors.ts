import { RootState } from './store';

export const selectCatSwipes = (store: RootState) => {
  return store.catSwipe;
};
