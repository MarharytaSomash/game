import { combineReducers } from 'redux';
import { answerReducer } from './answerReducer';
import { createStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  answer: answerReducer
});
export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
