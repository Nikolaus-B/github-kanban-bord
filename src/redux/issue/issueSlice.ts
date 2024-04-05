import { createSlice } from "@reduxjs/toolkit";
import { IssueState, Issue } from "./issue";
import { fetchUserRepoInfo, fetchUserRepoIsses } from "./operations";

const initialState: IssueState = {
  issues: [],
  repoInfo: { fullRepoName: "", starsCount: 0, repoUrl: "" },
  isLoading: false,
  isError: false,
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepoInfo.fulfilled, (state, action) => {
      state.repoInfo.fullRepoName = action.payload.full_name;
      state.repoInfo.starsCount = action.payload.stargazers_count;
      state.repoInfo.repoUrl = action.payload.html_url;
    });
    builder.addCase(fetchUserRepoIsses.fulfilled, (state, action) => {
      console.log(action.payload);

      const filteredIssue: Issue[] = [];

      action.payload.forEach((issue: any) => {
        return filteredIssue.push({
          id: issue.number,
          title: issue.title,
          issueNumber: issue.number,
          createdAt: issue.created_at,
          comments: issue.comments,
          author: issue.author_association,
          completed: issue.state,
        });
      });

      state.issues = filteredIssue;
    });
  },
});

const issueReducer = issueSlice.reducer;
export default issueReducer;
