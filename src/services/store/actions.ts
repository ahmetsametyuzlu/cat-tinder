import { Cat } from '../Types';
import {
  CATS_LOAD,
  CATS_CLEAR,
  CAT_PET,
  CAT_NO_PET,
  CAT_SKIP,
} from './actionTypes';

export const catsLoad = (payload: Cat[]) => ({
  type: CATS_LOAD,
  payload,
});

export const catsClear = () => ({
  type: CATS_CLEAR,
});

export const catPet = (id: string) => ({
  type: CAT_PET,
  payload: {id},
});

export const catNoPet = (id: string) => ({
  type: CAT_NO_PET,
  payload: {id},
});

export const catSkip = (id: string) => ({
  type: CAT_SKIP,
  payload: {id},
});
