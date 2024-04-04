interface Issue {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

export interface IssueState {
  issues: Issue[];
  isLoading: boolean;
  isError: boolean;
}
