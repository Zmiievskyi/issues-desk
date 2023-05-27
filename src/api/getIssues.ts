// const owner = "facebook";
// const repo = "react";
const token = process.env.REACT_APP_TOKEN;
//const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=closed`;
/*
export const getIssuesApi = (owner: string, repo: string, status: string): any => {
  return fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues?state=${status}`,
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

*/
export const getIssuesApi = (owner: string, repo: string, status: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues?state=${status}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 3000); // Замедление выполнения на 1 секунду
  });
};