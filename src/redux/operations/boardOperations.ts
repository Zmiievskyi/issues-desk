import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getIssues } from "../../api/getIssues";

export const getDone = createAsyncThunk(
  "issues/fetchIsDone",
  async (repo: Array<string>) => {
    const [owner, repoName] = repo;
    
    const response = await getIssues(owner, repoName, 'closed');
    // The value we return becomes the `fulfilled` action payload
    
    return response;
  }
);
export const getTodo = createAsyncThunk(
  "issues/fetchTodo",
  async (repo: Array<string>) => {
    const [owner, repoName] = repo;
    const response = await getIssues(owner, repoName, 'open');
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);