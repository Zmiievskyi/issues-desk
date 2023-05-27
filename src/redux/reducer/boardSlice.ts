import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDone, getTodo } from "../operations/boardOperations";

interface Board {
  id: number;
  title: string;
  items: any[];
}

export interface BoardsState {
  status: {
    isLoading: boolean;
    isError: boolean;
  };
  boards: Board[];
}

const initialState: BoardsState = {
  status: {
    isLoading: false,
    isError: false,
  },
  boards: [
    { id: 1, title: "ToDo", items: [] },
    { id: 2, title: "In Progress", items: [] },
    { id: 3, title: "Done", items: [] },
  ],
};

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (state, { payload }: PayloadAction<Board[]>) => {
      state.boards = [...payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.status.isLoading = true;
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.status.isLoading = false;
        state.boards[0].items = [...payload];
      })
      .addCase(getTodo.rejected, (state) => {
        state.status.isLoading = false;
        state.status.isError = true;
      })
      .addCase(getDone.pending, (state) => {
        // state.status.isLoading = true;
      })
      .addCase(getDone.fulfilled, (state, { payload }) => {
        // state.status.isLoading = false;
        state.boards[2].items = [...payload];
      })
      .addCase(getDone.rejected, (state) => {
        state.status.isLoading = false;
        state.status.isError = true;
      });
      
  },
});

export const { setBoards } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
