import { ADD_EARNED_MONEY } from '../type';

export const AddEarnedMoney = (amount: string) => {
  return {
    type: ADD_EARNED_MONEY,
    payload: amount
  };
};
