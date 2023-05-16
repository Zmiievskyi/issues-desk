const owner = "facebook";
const repo = "react";
const token = process.env.REACT_APP_TOKEN;
//const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=closed`;

export const getIssues = (status: string): any => {
  return (
    fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?state=${status}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    )
      .then((response) => response.json())
      //    .then((data) => setlistIssues([...data]))
      .catch((error) => console.error(error))
  );
};
