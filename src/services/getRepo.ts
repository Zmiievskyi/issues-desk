// const token = process.env.REACT_APP_TOKEN;

export const getRepoApi = (owner: string, repo: string, token:string): any => {
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
