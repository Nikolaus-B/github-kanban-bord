import { createSlice } from "@reduxjs/toolkit";

import { fetchUserRepoInfo, fetchUserRepoIsses } from "./operations";
import { Issue, IssueState } from "../../interfaces/Issue";

const initialState: IssueState = {
  usersRepos: [],
  currentRepo: {
    repoUrl: "",
    issues: [],
    repoInfo: { fullRepoName: "", starsCount: -1 },
  },
  isLoading: false,
  isError: false,
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    changeIssueCompletedState: (state, action) => {
      const { id, completedState } = action.payload;

      const repoIndex = state.usersRepos.findIndex(
        (repo) => repo.repoUrl === state.currentRepo.repoUrl
      );

      if (repoIndex !== -1) {
        const issueIndex = state.usersRepos[repoIndex].issues.findIndex(
          (issue) => issue.id === Number(id)
        );

        if (issueIndex !== -1) {
          state.usersRepos[repoIndex].issues[issueIndex].completed =
            completedState;
          state.currentRepo.issues[issueIndex].completed = completedState;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserRepoInfo.fulfilled, (state, action) => {
      const tempRepoState = {
        repoUrl: action.payload.html_url,
        issues: [],
        repoInfo: {
          fullRepoName: action.payload.full_name,
          starsCount: action.payload.stargazers_count,
        },
      };

      const existingRepoIndex = state.usersRepos.findIndex(
        (repo) => repo.repoUrl === tempRepoState.repoUrl
      );

      if (existingRepoIndex === -1) {
        state.usersRepos.push(tempRepoState);
      }

      state.currentRepo = tempRepoState;
    });
    builder.addCase(fetchUserRepoIsses.fulfilled, (state, action) => {
      const { issues, repoUrl } = action.payload;
      const filteredIssues: Issue[] = issues.map((issue: any) => ({
        id: issue.number,
        title: issue.title,
        issueNumber: issue.number,
        createdAt: issue.created_at,
        comments: issue.comments,
        author: issue.author_association,
        completed: issue.state,
        issueUrl: issue.html_url,
      }));

      const repoIndex = state.usersRepos.findIndex(
        (repo) => repo.repoUrl === repoUrl
      );

      if (repoIndex !== -1) {
        const existingIssues = state.usersRepos[repoIndex].issues;

        if (existingIssues.length === 0) {
          state.usersRepos[repoIndex].issues = filteredIssues;

          state.currentRepo.issues = filteredIssues;
        } else {
          state.currentRepo.issues = state.usersRepos[repoIndex].issues;
        }
      }
    });
  },
});

export const { changeIssueCompletedState } = issueSlice.actions;
const issueReducer = issueSlice.reducer;
export default issueReducer;
