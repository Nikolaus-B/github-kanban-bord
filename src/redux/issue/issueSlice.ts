import { createSlice } from "@reduxjs/toolkit";
import { IssueState, Issue } from "./issue";
import { fetchUserRepoInfo, fetchUserRepoIsses } from "./operations";

const initialState: IssueState = {
  issues: [
    {
      id: 232323,
      title: "string",
      issueNumber: 21,
      createdAt: "2121212",
      comments: 3,
      author: "d",
      completed: "inProgress",
      issueUrl: "string",
    },
    {
      id: 3232,
      title: "32",
      issueNumber: 32,
      createdAt: "3232323",
      comments: 32,
      author: "string",
      completed: "closed",
      issueUrl: "dfdfdfdf",
    },
  ],
  repoInfo: { fullRepoName: "", starsCount: 0, repoUrl: "" },
  isLoading: false,
  isError: false,
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    reorderIssue: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const items = [...state.issues];
      const [removed] = items.splice(startIndex, 1);
      items.splice(endIndex, 0, removed);
      state.issues = items;
    },
    removeIssue: (state, action) => {
      const { index } = action.payload;
      const items = state.issues.filter((_, idx) => idx !== index);
      state.issues = items;
    },
    appendAtIssue: (state, action) => {
      const { index, issue } = action.payload;
      const items = [
        ...state.issues.slice(0, index),
        issue,
        ...state.issues.slice(index),
      ];
      state.issues = items;
    },
    changeIssueCompletedState: (state, action) => {
      const { id, completedState } = action.payload;
      // console.log(id, completedState);

      const index = state.issues.findIndex((issue) => issue.id === Number(id));

      // console.log(index);

      if (index !== -1) {
        const updatedIssue = { ...state.issues[index], completedState };

        const updatedIssues = [
          ...state.issues.slice(0, index),
          updatedIssue,
          ...state.issues.slice(index + 1),
        ];

        state.issues = updatedIssues;
        // console.log(state.issues);
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

export const {
  reorderIssue,
  removeIssue,
  appendAtIssue,
  changeIssueCompletedState,
} = issueSlice.actions;
const issueReducer = issueSlice.reducer;
export default issueReducer;
