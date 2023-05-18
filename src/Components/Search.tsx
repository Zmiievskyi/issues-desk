import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../redux/hooks";
import { setRepo } from "../redux/reducer/repoSlice";

export const Search = () => {
        const dispatch = useAppDispatch();

  const formHandler = (e: any) => {
    e.preventDefault();
    const url = e.target[0].value;
    const urlArr = url.split("/");
    const repo = urlArr[urlArr.length - 1];
    const owner = urlArr[urlArr.length - 2];
    const payload:string[] = [owner, repo];
    // setRepoUrl([owner, repo]);
    dispatch(setRepo(payload));
  };


  return (
    <Form className="container d-flex p-3 text-bg-dark" onSubmit={formHandler}>
      <Form.Group className="me-2" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter repo URL" />
      </Form.Group>
      <Button type="submit" variant="secondary" size="sm">
        Load issues
      </Button>
    </Form>
  );
};
