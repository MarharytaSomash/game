import { WRONG_ANSWER } from '../type';

export const AnswerWrong = (values: string) => {
  return {
    type: 'WRONG_ANSWER',
    payload: values
  };
};
