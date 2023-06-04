

export const getIssuesApi = (owner: string, repo: string, token:string, status: string): Promise<any> => {

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
    }, 1000); // Замедление выполнения на 1 секунду
  });
};