import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {repoReducer} from "../reducer/repoSlice";
import {boardReducer} from "../reducer/boardSlice";

export const store = configureStore({
  reducer: {
    repo: repoReducer,
    boards: boardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
