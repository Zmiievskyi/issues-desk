import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRepoApi } from "../../api/getRepo";



export const setRepository = createAsyncThunk(
  "issues/fetchRepository",
  async (repo: Array<string>) => {
    const [owner, repoName] = repo;
    const response = await getRepoApi(owner, repoName);
    return response;
  }
);
