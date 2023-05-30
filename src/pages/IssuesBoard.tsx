import { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getDone, getTodo } from "../redux/operations/boardOperations";
import { setBoards } from "../redux/reducer/boardSlice";
import { IssuesList } from "../components/issues/IssuesList";

export const IssuesBoard = () => {
  const repoRef: any = useAppSelector((state) => state.repo.repository);
  const boards: { id: number; title: string; items: any[] }[] = useAppSelector(
    (state) => state.boards.boards
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!repoRef.full_name) return;
    const url = repoRef.full_name.split('/')
    dispatch(getDone(url));
    dispatch(getTodo(url));
  }, [dispatch, repoRef.full_name]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newBoardState = boards.map((board) => {
      if (board.title === result.source.droppableId) {
        const copyBoard = [...board.items];
        const dragItem: any[] = copyBoard.splice(result.source.index, 1);

        if (result.source.droppableId === result.destination.droppableId) {
          copyBoard.splice(result.destination.index, 0, dragItem[0]);
        }
        return { ...board, items: copyBoard };
      }
      if (board.title === result.destination.droppableId) {
        const copyDragBoard: any = boards.find(
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
      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {repoRef.id ? <IssuesList boards={boards} />: null}
        </DragDropContext>
      </div>
  );
};
