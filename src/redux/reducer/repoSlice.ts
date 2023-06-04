import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setRepository } from "../operations/repOperations";

export interface RepoState {
  token: string;
  repository: {
    adress: string[];
    data: any;
  };
}

const initialState: RepoState = {
  token: "",
  repository: {
    adress: [],
    data: {},
  },
};

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>): any => {
      state.token = action.payload;
    },
    setAdress: (state, action: PayloadAction<string[]>): any => {
      state.repository.adress = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setRepository.fulfilled, (state, { payload }) => {
      state.repository.data = { ...payload };
    });
  },
});

export const { setToken, setAdress } = repoSlice.actions;

export const repoReducer = repoSlice.reducer;
