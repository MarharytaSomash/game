import { ADD_EARNED_MONEY } from '../type';
import { Answer } from '../interface';

const initialState = {
  score: 0
};

export const EarnedMoneyReducer = (state = initialState, { type, payload }: Answer) => {
  switch (type) {
    case ADD_EARNED_MONEY: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
