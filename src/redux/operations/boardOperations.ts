import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIssuesApi } from "../../services/getIssues";

export const getDone = createAsyncThunk(
  "issues/fetchIsDone",
  async (repo: Array<string>) => {
    const [owner, repoName, token] = repo;
    const response = await getIssuesApi(owner, repoName, token, "closed");
    return response;
  }
);
export const getTodo = createAsyncThunk(
  "issues/fetchTodo",
  async (repo: Array<string>) => {
    const [owner, repoName, token] = repo;
    const response = await getIssuesApi(owner, repoName, token, "open");
    return response;
  }
);
