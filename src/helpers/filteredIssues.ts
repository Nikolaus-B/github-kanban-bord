import { Issue } from "../redux/issue/issue";

function filteredIssues(issues: Issue[], completedState: string): Issue[] {
  const filteredIssues: Issue[] = [];

  issues.forEach((issue: Issue) => {
    // console.log("completed:", issue.completed);
    // console.log("completedState", completedState);

    return issue.completed === completedState ? filteredIssues.push(issue) : "";
  });

  return filteredIssues;
}

export default filteredIssues;
