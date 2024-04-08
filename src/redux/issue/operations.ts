import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.github.com/repos/";

interface FetchRepoArgs {
  username: string;
  repoName: string;
  repoUrl: string;
}

export const fetchUserRepoInfo = createAsyncThunk(
  "repoInfo/fetchInfo",
  async ({ username, repoName }: FetchRepoArgs, thunkAPI) => {
    try {
      const response = await axios.get(`/${username}/${repoName}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

export const fetchUserRepoIsses = createAsyncThunk(
  "issues/fetchAll",
  async ({ username, repoName, repoUrl }: FetchRepoArgs, thunkAPI) => {
    try {
      const response = await axios.get(`/${username}/${repoName}/issues`);
      return { issues: response.data, repoUrl: repoUrl };
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
