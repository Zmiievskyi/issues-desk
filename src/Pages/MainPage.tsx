import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
// import { TodoItem } from "../Components/TodoItem";
import { getDone, getTodo } from "../redux/operations/boardOperations";
// import { repoUrl } from "../redux/reducer/repoSlice";
import { setCurrent, setInProgres, setTodo } from "../redux/reducer/boardSlice";

interface Item {
  id: string;
}

interface Current {
  board: any;
  item: {
    id: string;
  };
}

export const MainPage = () => {
  // const [todo, setTodo] = useState<any>([]);
  // const [inProgress, setInProgress] = useState<any>([]);
  // const [done, setDone] = useState<any>([]);
  const [currentBoard, setCurrentBoard] = useState<any>(null);
  const [currentItem, setCurrentItem] = useState<any>(null);

  const repo = useAppSelector((state) => state.repo.repoURL);
  const todo = useAppSelector((state) => state.boards.boards.todo);
  const inProgress = useAppSelector((state) => state.boards.boards.inProgress);
  const done = useAppSelector((state) => state.boards.boards.done);
  const current: Current = useAppSelector(
    (state) => state.boards.boards.current
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (repo.length < 1) return;
    dispatch(getDone(repo));
    dispatch(getTodo(repo));
  }, [dispatch, repo]);

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    const item = e.target.className.split(" ");
    if (item.includes("list-group-item")) {
      e.target.style.background = "yellow";
      e.target.style.border = "1px solid yellow";
    }
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.background = "none";
    e.target.style.border = "none";
  };

  const dragEndHandler = (e: any) => {
    e.target.style.background = "none";
    e.target.style.border = "none";
  };

  const dragStartHandler = (e: any, board: any, item: any) => {
    dispatch(setCurrent({ item: item, board: board }));
  };

  const dropHandler = (e: any, board: any, item: any) => {
    e.preventDefault();
    e.target.style.background = "none";
    e.target.style.border = "none";
    if (current.board === "done") return alert("Sorry, it's done");

    //DELETE--------------------------------
    const dragIndexInProgress = inProgress.findIndex(
      (i: any) => i.id === current.item.id
    );
    const copy = [...inProgress];
    copy.splice(dragIndexInProgress, 1);
    dispatch(setInProgres(copy));
    // dispatch(setTodo(copy));

    //ADD--------------------------------
    switch (board) {
      case "inProgress":
        const dropIndexInProgress = inProgress.findIndex(
          (i: any) => i.id === item.id
        );
        const copy: Item[] = [...inProgress];
        copy.splice(dropIndexInProgress, 0, current.item);
        dispatch(setInProgres(copy));
        break;
      case "done":
        if (current.board === "todo")
          return alert("Sorry,only after in progress");
        const dropIndexDone = done.findIndex((i: any) => i.id === item.id);
        const copyTodo: Item[] = [...done];
        copyTodo.splice(dropIndexDone, 0, current.item);
        dispatch(setInProgres(copyTodo));
        break;
      default:
        alert(`We hope that you will return to this issues`);
    }
  };

  const firsDropHandler = (e: any) => {
    e.preventDefault();
    const item = e.target.className.split(" ");
    if (item.includes("list-group-item")) {
      return;
    }
    if (current.board === "done") return alert("Sorry, it's done");
    e.target.style.background = "none";
    e.target.style.border = "none";
    dispatch(setInProgres([...inProgress, current.item]));
    const copy: Item[] = [...todo];
    const idx = copy.findIndex((i: any) => i.id === current.item.id);
    copy.splice(idx, 1);
    dispatch(setTodo(copy));
  };

  return (
    <Container className="d-flex justify-content-around">
      <ListGroup className="w-25 border">
        {todo?.map((i: any) => (
          <ListGroup.Item
            key={i.id}
            className="m-2 border list-group-item"
            draggable
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={(e) => dragStartHandler(e, "todo", i)}
            onDragEnd={dragEndHandler}
            onDrop={(e) => dropHandler(e, "todo", i)}
          >
            {i.title}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ListGroup
        className="w-25 border"
        onDrop={firsDropHandler}
        onDragOver={dragOverHandler}
      >
        {inProgress?.map((i: any) => (
          <ListGroup.Item
            key={i.id}
            className="m-2 border list-group-item"
            draggable
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={(e) => dragStartHandler(e, "inProgress", i)}
            onDragEnd={dragEndHandler}
            onDrop={(e) => dropHandler(e, "inProgress", i)}
          >
            {i.title}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ListGroup className="w-25 border">
        {done?.map((i: any) => (
          <ListGroup.Item
            key={i.id}
            className="m-2 border list-group-item"
            draggable
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={(e) => dragStartHandler(e, "done", i)}
            onDragEnd={dragEndHandler}
            onDrop={(e) => dropHandler(e, "done", i)}
          >
            {i.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
