import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setRepository } from "../../redux/operations/boardOperations";
import Style from "./Header.module.scss";

export const RepoSearch = () => {
  const dispatch = useAppDispatch();
  const statusRef: { isLoading: boolean; isError: boolean } = useAppSelector(
    (state) => state.boards.status
  );

  const validateInput = (input: string): boolean => {
    const regex = /^https:\/\/github.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
    return regex.test(input);
  };

  const formDataHandler = (e: any) => {
    e.preventDefault();
    if (!validateInput(e.target[0].value)) {
      alert("Invalid URL");
      return;
    }
    const url = e.target[0].value;
    const urlArr = url.split("/");
    const repo = urlArr[urlArr.length - 1];
    const owner = urlArr[urlArr.length - 2];
    const payload: string[] = [owner, repo];
    dispatch(setRepository(payload));
  };

  return (
    <Form className="container d-flex p-3 w-100" onSubmit={formDataHandler}>
      <Form.Group
        className="me-2 w-75"
        controlId="formBasicEmail"
        style={{ backgroundColor: "inherit" }}
      >
        <Form.Control
          className={Style.form_control}
          type="text"
          placeholder="Enter repo URL"
          style={{ borderRadius: "0px", borderColor: "black" }}
        />
      </Form.Group>
      <Button
        className="w-25"
        type="submit"
        variant="outline-dark"
        disabled={statusRef.isLoading}
        size="sm"
        style={{ borderRadius: "0px" }}
      >
        {statusRef.isLoading ? "Loading…" : "Load issues"}
      </Button>
    </Form>
  );
};
