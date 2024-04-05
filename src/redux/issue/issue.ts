export interface Issue {
  id: number;
  title: string;
  issueNumber: number;
  createdAt: string;
  comments: number;
  author: string;
  completed: string;
}

interface RepoInfo {
  fullRepoName: string;
  starsCount: number;
  repoUrl: string;
}

export interface IssueState {
  issues: Issue[];
  repoInfo: RepoInfo;
  isLoading: boolean;
  isError: boolean;
}
