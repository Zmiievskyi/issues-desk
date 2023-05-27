import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setRepository } from "../operations/repoOprations";

export interface RepoState {
  repoURL: any[];
  repository: { },

}

const initialState: RepoState = {
  repoURL: [],
  repository: { },

};


export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepo: (state, action: PayloadAction<string[]>): any => {
      state.repoURL = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(setRepository.fulfilled, (state, { payload }) => {
      state.repository = {...payload};
    })
  },
});

export const {setRepo} = repoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export const repoReducer = repoSlice.reducer;
