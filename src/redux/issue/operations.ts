import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.github.com/repos/";

interface FetchRepoArgs {
  username: string;
  repoName: string;
}

export const fetchUserRepoInfo = createAsyncThunk(
  "issues/fetchAll",
  async ({ username, repoName }: FetchRepoArgs, thunkAPI) => {
    try {
      const response = await axios.get(`/${username}/${repoName}`);
      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

export const fetchUserRepoIsses = createAsyncThunk(
  "issues/fetchAll",
  async ({ username, repoName }: FetchRepoArgs, thunkAPI) => {
    try {
      const response = await axios.get(`/${username}/${repoName}/issues`);
      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
