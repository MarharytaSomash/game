import { GET_NUMBER } from '../type';
import { Answer } from '../interface';

const initialState = {
  id: 1
};

export const NumberQuestionReducer = (state = initialState, { type, payload }: Answer) => {
  switch (type) {
    case GET_NUMBER: {
      return {
        ...state,
        id: payload + 1
      };
    }
    default: {
      return state;
    }
  }
};
