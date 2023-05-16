import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { TodoItem } from "../Components/TodoItem";
import { getIssues } from "../api/getIssues";
import ListGroup from "react-bootstrap/ListGroup";

export const MainPage = () => {
  const [todo, setTodo] = useState<any>([]);
  const [inProgress, setInProgress] = useState<any>([]);
  const [done, setDone] = useState<any>([]);
  const [currentBoard, setCurrentBoard] = useState<any>(null);
  const [currentItem, setCurrentItem] = useState<any>(null);

  useEffect(() => {
    Promise.all([getIssues("open"), getIssues("closed")]).then((data) => {
      setTodo([...data[0]]);
      setDone([...data[1]]);
    });
  }, []);

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
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dropHandler = (e: any, board: any, item: any) => {
    e.preventDefault();
    e.target.style.background = "none";
    e.target.style.border = "none";
    if (currentBoard === "done") return alert("Sorry, it's done");

    //DELETE--------------------------------
    const dragIndexInProgress = inProgress.findIndex(
      (i: any) => i.id === currentItem.id
    );
    setInProgress((prev: any) => {
      const copy = [...prev];
      copy.splice(dragIndexInProgress, 1);
      return copy;
    });
    //ADD--------------------------------
    switch (board) {
      case "inProgress":
        const dropIndexInProgress = inProgress.findIndex(
          (i: any) => i.id === item.id
        );
        setInProgress((prev: any) => {
          const copy = [...prev];
          copy.splice(dropIndexInProgress, 0, currentItem);
          return copy;
        });
        break;
      case "done":
        if (currentBoard === "todo")
          return alert("Sorry,only after in progress");

        const dropIndexDone = done.findIndex((i: any) => i.id === item.id);
        setDone((prev: any) => {
          const copy = [...prev];
          copy.splice(dropIndexDone, 0, currentItem);
          return copy;
        });
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
    if (currentBoard === "done") return alert("Sorry, it's done");

    e.target.style.background = "none";
    e.target.style.border = "none";
    setInProgress((prev: any) => [...prev, currentItem]);
    const copy = [...todo];
    const idx = copy.findIndex((i: any) => i.id === currentItem.id);
    copy.splice(idx, 1);
    setTodo(copy);
  };

  return (
    <Container className="d-flex justify-content-around">
      <ListGroup className="w-25 border">
        {todo.map((i: any) => (
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
        {done.map((i: any) => (
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
