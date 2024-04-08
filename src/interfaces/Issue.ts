export interface Issue {
  id: number;
  title: string;
  issueNumber: number;
  createdAt: string;
  comments: number;
  author: string;
  completed: string;
  issueUrl: string;
}

interface RepoInfo {
  fullRepoName: string;
  starsCount: number;
}

interface UserRepo {
  repoUrl: string;
  issues: Issue[];
  repoInfo: RepoInfo;
}

export interface IssueState {
  usersRepos: UserRepo[];
  currentRepo: UserRepo;
  isLoading: boolean;
  isError: boolean;
}
