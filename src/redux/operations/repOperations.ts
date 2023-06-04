import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRepoApi } from "../../services/getRepo";



export const setRepository = createAsyncThunk(
  "issues/fetchRepository",
  async (repo: Array<string>) => {
    const [owner, repoName, token] = repo;
    const response = await getRepoApi(owner, repoName, token);
    return response;
  }
);
