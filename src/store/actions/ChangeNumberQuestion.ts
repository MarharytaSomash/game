import { GET_NUMBER } from '../type';

export const ChangeNumberQuestion = (values: number) => {
  return {
    type: GET_NUMBER,
    payload: values
  };
};
