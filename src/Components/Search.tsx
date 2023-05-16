import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Search = () => {
const [repoUrl, setRepoUrl] = useState<any>([]);
const formHandler = (e: any) => {
  e.preventDefault();
  const url = e.target[0].value;
  const urlArr = url.split("/");
  const repo = urlArr[urlArr.length - 1];
  const owner = urlArr[urlArr.length - 2];
  setRepoUrl([owner, repo]);
  console.log(repoUrl);
};

  return (
    <Form className="container d-flex p-3 text-bg-dark" onSubmit={formHandler}>
      <Form.Group className="me-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter repo URL" />
      </Form.Group>
      <Button type="button" variant="secondary" size="sm">
        Load issues
      </Button>
    </Form>
  );
};
