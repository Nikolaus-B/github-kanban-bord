import { createSlice } from "@reduxjs/toolkit";

import { fetchUserRepoInfo, fetchUserRepoIsses } from "./operations";
import { Issue, IssueState } from "../../interfaces/Issue";

const initialState: IssueState = {
  issues: [],
  repoInfo: { fullRepoName: "", starsCount: 0, repoUrl: "" },
  isLoading: false,
  isError: false,
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    changeIssueCompletedState: (state, action) => {
      const { id, completedState } = action.payload;

      const index = state.issues.findIndex((issue) => issue.id === Number(id));

      if (index !== -1) {
        const updatedIssue = {
          ...state.issues[index],
          completed: completedState,
        };

        const updatedIssues = [
          ...state.issues.slice(0, index),
          updatedIssue,
          ...state.issues.slice(index + 1),
        ];

        state.issues = updatedIssues;
      }
    },
  },
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
          issueUrl: issue.html_url,
        });
      });

      state.issues.push(...filteredIssue);
    });
  },
});

export const { changeIssueCompletedState } = issueSlice.actions;
const issueReducer = issueSlice.reducer;
export default issueReducer;
