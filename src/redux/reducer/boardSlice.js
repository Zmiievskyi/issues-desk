import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDone, getTodo } from "../operations/boardOperations";

const initialState = {
  status: {
    isLoading: false,
    isError: false,
  },
  boards: {
    todo: [],
    inProgress: [],
    done: [],
    current: { board: '', item: { id: 'null' } },
  },
};

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setInProgres: (state, { payload }) => {
      state.boards.inProgress = [...payload];
    },
    setCurrent: (state, { payload }) => {
      state.boards.current = {...payload};
    },
    setTodo: (state, { payload }) => {
      state.boards.todo = [...payload];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.status.isLoading = true;
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.status.isLoading = false;
        state.boards.todo = [...payload];
      })
      .addCase(getTodo.rejected, (state) => {
        state.status.isLoading = false;
        state.status.isError = true;
      })
      .addCase(getDone.pending, (state) => {
        state.status.isLoading = true;
      })
      .addCase(getDone.fulfilled, (state, { payload }) => {
        state.status.isLoading = false;
        state.boards.done = [...payload];
      })
      .addCase(getDone.rejected, (state) => {
        state.status.isLoading = false;
        state.status.isError = true;
      });
  },
});

export const { setInProgres, setCurrent, setTodo } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;

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
