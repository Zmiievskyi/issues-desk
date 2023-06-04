import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setToken } from "../redux/reducer/repoSlice";
import { getTodo, getDone } from "../redux/operations/boardOperations";

export function AuthModal({ modalHandler, url }: any) {
  const [show, setShow] = useState(false);
  const [t, setT] = useState("");
  const repoRef: any = useAppSelector((state) => state.repo.repository);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modalHandler) setShow(true);
  }, [modalHandler]);

  const handleClose = () => {
    setShow(false);
  };

  const setTokenHandler = (e: any) => {

    if (t === "") {
      alert("Please enter token");
      return;
    };

    dispatch(setToken(t));

    if (!url) return;

    // const payload = url.split("/");
    // payload.push(t);
    
    // dispatch(getDone(payload));
    // dispatch(getTodo(payload));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Git HUB</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Authentification</Form.Label>
              <Form.Control
                type="text"
                placeholder="GitHub token please"
                autoFocus
                autoComplete="off"
                onChange={(e) => setT(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={setTokenHandler}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
