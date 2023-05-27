// const owner = "facebook";
// const repo = "react";
const token = process.env.REACT_APP_TOKEN;
//const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=closed`;



export const getRepoApi = (owner: string, repo: string): any => {
  return fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};
