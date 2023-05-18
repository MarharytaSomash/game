import { CORRECT_ANSWER, WRONG_ANSWER } from '../type';
import { Answer } from '../interface';

const initialState = {
  answer: ''
};

export const answerReducer = (state = initialState, { type, payload }: Answer) => {
  switch (type) {
    case CORRECT_ANSWER: {
      return {
        ...state,
        payload
      };
    }
    case WRONG_ANSWER: {
      return {
        ...state,
        payload
      };
    }
    default: {
      return state;
    }
  }
};
