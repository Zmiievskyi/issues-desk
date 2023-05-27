import { configureStore, ThunkAction, AnyAction, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { repoReducer } from "../reducer/repoSlice";
import { boardReducer, BoardsState } from "../reducer/boardSlice";
import { RepoState } from '../reducer/repoSlice';
import { PersistPartial } from 'redux-persist/es/persistReducer';

interface PersistedBoardsState extends PersistPartial, BoardsState {}
interface PersistedRepoState extends PersistPartial, RepoState {}


const boardsPersistConfig = {
  key: "boards",
  storage,
  // whitelist: ['token'],
};

const repoPersistConfig = {
  key: "repo",
  storage,
  // whitelist: ['token'],
};

const persistedBoardReducer = persistReducer<PersistedBoardsState, AnyAction>(
  boardsPersistConfig,
  boardReducer as (state: BoardsState | undefined, action: AnyAction) => PersistedBoardsState
);

const persistedRepoReducer = persistReducer<PersistedRepoState, AnyAction>(
  repoPersistConfig,
  repoReducer as (state: RepoState | undefined, action: AnyAction) => PersistedRepoState
);

const rootReducer = combineReducers({
  repo: persistedRepoReducer,
  boards: persistedBoardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export const persistor: Persistor = persistStore(store);