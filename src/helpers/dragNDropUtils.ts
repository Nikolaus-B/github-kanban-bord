import { Issue } from "../redux/issue/issue";
import { filteredIssues } from "./filterIssues";

export const reorder = (
  list: filteredIssues[],
  startIndex: number,
  endIndex: number
) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  1;
  result.splice(endIndex, 0, removed);

  return result;
};

export const remove = (list: filteredIssues[], index: number) => {
  const result = [...list];
  result.splice(index, 1);
  return result;
};

export const appendAt = (
  list: filteredIssues[],
  index: number,
  issue: Issue
) => {
  const result = [...list];
  result.splice(index, 0, issue);
  return result;
};
