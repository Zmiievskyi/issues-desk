import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { persistor } from "../../redux/store/store";
import Style from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Spinner from "react-bootstrap/Spinner";
import { setToken, setAdress } from "../../redux/reducer/repoSlice";
import { AuthModal } from "../../features/AuthModal";
import { clearBoards } from "../../redux/reducer/boardSlice";

export const RepoSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(0);
  const [rerender, setRerender] = useState(false);
  const [gitUrl, setGitUrl] = useState("");

  const dispatch = useAppDispatch();
  const adressRef: any = useAppSelector(
    (state) => state.repo.repository.adress
  );
  const tokenRef: string = useAppSelector((state) => state.repo.token);
  const statusRef: { isLoading: boolean; isError: boolean } = useAppSelector(
    (state) => state.boards.status
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    if (token) dispatch(setToken(token));
  }, [dispatch]);

  const validateInput = (input: string): boolean => {
    const regex = /^https:\/\/github.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
    return regex.test(input);
  };

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    setRerender(!rerender);
    if (!validateInput(gitUrl)) {
      alert("Invalid URL");
      return;
    }
    const urlArr = gitUrl.split("/");
    const repo = urlArr[urlArr.length - 1];
    const owner = urlArr[urlArr.length - 2];
    const payload: any = [owner, repo, tokenRef];

    if (adressRef[0] !== gitUrl[0]) {
      dispatch(clearBoards([]));
      // persistor.pause();
      // persistor.flush().then(() => {
      //   return persistor.purge();
      // });
      localStorage.removeItem('persist:repo')
    }
    dispatch(setAdress(payload));
    if (!tokenRef) {
      setIsModalOpen((prev) => prev + 1);
      return;
    }
  };

  return (
    <Form className="container d-flex p-3 w-100" onSubmit={formSubmitHandler}>
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
          onChange={(e) => setGitUrl(e.target.value)}
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
        {statusRef.isLoading && <Spinner animation="border" size="sm" />}
        {statusRef.isLoading ? "Loading…" : "Load issues"}
      </Button>
      <AuthModal modalHandler={isModalOpen} url={gitUrl} />
    </Form>
  );
};
