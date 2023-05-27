import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIssuesApi } from "../../api/getIssues";
import { getRepoApi } from "../../api/getRepo";

export const getDone = createAsyncThunk(
  "issues/fetchIsDone",
  async (repo: Array<string>) => {
    const [owner, repoName] = repo;
    const response = await getIssuesApi(owner, repoName, 'closed');
    return response;
  }
);
export const getTodo = createAsyncThunk(
  "issues/fetchTodo",
  async (repo: Array<string>) => {
    const [owner, repoName] = repo;
    const response = await getIssuesApi(owner, repoName, 'open');
    return response;
  }
);

export const setRepository = createAsyncThunk(
  "issues/fetchRepository",
  async (repo: Array<string>) => {
    const [owner, repoName] = repo;
    const response = await getRepoApi(owner, repoName);
    return response;
  }
);
