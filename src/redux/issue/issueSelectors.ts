import { RootState } from "../store";

export const selectIssues = (state: RootState) => state.issues.issues;

export const selectRepoInfo = (state: RootState) => state.issues.repoInfo;
