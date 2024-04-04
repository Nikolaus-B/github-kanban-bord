export function getUsernameAndRepo(url: string): {
  username: string;
  repoName: string;
} {
  const urlParts = url.split("/");
  const username = urlParts[urlParts.length - 2];
  const repoName = urlParts[urlParts.length - 1];
  return { username, repoName };
}
