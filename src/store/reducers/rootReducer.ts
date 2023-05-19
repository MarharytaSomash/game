import { combineReducers } from 'redux';
import { answerReducer } from './answerReducer';
import { createStore } from '@reduxjs/toolkit';
import { NumberQuestionReducer } from './NumberQuestionReducer';
import { EarnedMoneyReducer } from './EarnedMoneyReducer';

export const rootReducer = combineReducers({
  answer: answerReducer,
  numberQuestion: NumberQuestionReducer,
  earnedMoney: EarnedMoneyReducer
});
export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
