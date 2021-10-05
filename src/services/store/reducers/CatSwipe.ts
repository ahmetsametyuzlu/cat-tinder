import { Action, Cat, CatSwipe } from '../../Types';
import { CAT_NO_PET, CAT_PET, CAT_SKIP, CATS_CLEAR, CATS_LOAD } from "../actionTypes";

const initialState: CatSwipe[] = [];

export default function reducer(state = initialState, action: Action) {
  let catSwipes;
  let catSwipeIndex;

  switch (action.type) {
    case CATS_CLEAR:
      return [];
    case CATS_LOAD:
      return [...action.payload.map((cat: Cat) => {
        return {
          cat,
          status: undefined,
        }
      })];
    case CAT_PET:
      catSwipes = [...state];
      catSwipeIndex = catSwipes.findIndex(catSwipe => catSwipe.cat.id === action.payload.id);
      catSwipes[catSwipeIndex].status = true;
      return catSwipes;
    case CAT_SKIP:
      catSwipes = [...state];
      catSwipeIndex = catSwipes.findIndex(catSwipe => catSwipe.cat.id === action.payload.id);
      catSwipes[catSwipeIndex].status = null;
      return catSwipes;
    case CAT_NO_PET:
      catSwipes = [...state];
      catSwipeIndex = catSwipes.findIndex(catSwipe => catSwipe.cat.id === action.payload.id);
      catSwipes[catSwipeIndex].status = false;
      return catSwipes;
    default:
      return state;
  }
}
