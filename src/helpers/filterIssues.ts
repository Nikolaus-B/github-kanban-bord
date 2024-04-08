import { Issue } from "../redux/issue/issue";

export interface filteredIssues {
  open: Issue[];
  inProgress: Issue[];
  closed: Issue[];
}

function filterIssues(issues: Issue[]): filteredIssues {
  const filteredIssues: filteredIssues = {
    open: [],
    inProgress: [],
    closed: [],
  };

  issues.forEach((issue: any) => {
    switch (issue.completed) {
      case "open":
        filteredIssues.open.push(issue);
        break;
      case "inProgress":
        filteredIssues.inProgress.push(issue);
        break;
      case "closed":
        filteredIssues.closed.push(issue);
        break;
      default:
        break;
    }
  });

  return filteredIssues;
}

export default filterIssues;
