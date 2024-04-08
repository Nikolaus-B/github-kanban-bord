import { RootState } from "../store";

export const selectUsersRepos = (state: RootState) => state.issues.usersRepos;

export const selectCurrentRepo = (state: RootState) => state.issues.currentRepo;
