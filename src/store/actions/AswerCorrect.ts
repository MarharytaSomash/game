import { CORRECT_ANSWER } from '../type';

export const AnswerCorrect = (values: string) => {
  return {
    type: 'CORRECT_ANSWER',
    payload: values
  };
};
