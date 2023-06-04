import { DragDropContext } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setBoards } from "../redux/reducer/boardSlice";
import { IssuesList } from "../components/issues/IssuesList";
import { Container } from "react-bootstrap";

export const IssuesBoard = () => {
  const tokenRef: any = useAppSelector((state) => state.repo.token);
  const boardsRef: { id: number; title: string; items: any[] }[] =
    useAppSelector((state) => state.boards.boards);

  const dispatch = useAppDispatch();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newBoardState = boardsRef.map((board) => {
      if (board.title === result.source.droppableId) {
        const copyBoard = [...board.items];
        const dragItem: any[] = copyBoard.splice(result.source.index, 1);

        if (result.source.droppableId === result.destination.droppableId) {
          copyBoard.splice(result.destination.index, 0, dragItem[0]);
        }
        return { ...board, items: copyBoard };
      }
      if (board.title === result.destination.droppableId) {
        const copyDragBoard: any = boardsRef.find(
          (b) => b.title === result.source.droppableId
        )?.items;
        const dragItem = [...copyDragBoard].splice(result.source.index, 1);
        const copyDropBoard = [...board.items];
        copyDropBoard.splice(result.destination.index, 0, dragItem[0]);

        return { ...board, items: copyDropBoard };
      }

      return board;
    });

    dispatch(setBoards(newBoardState));
  };

  return (
    <main>
      <Container className="d-flex" style={{justifyContent: 'space-around'}}>
        <DragDropContext onDragEnd={onDragEnd}>
          {tokenRef ? <IssuesList /> : null}
        </DragDropContext>
      </Container>
    </main>
  );
};
