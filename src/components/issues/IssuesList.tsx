import  { useEffect } from "react";
import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppSelector,useAppDispatch } from "../../redux/hooks";
import { IssuesItem } from "../issues/IssuesItem";
import { getDone, getTodo } from "../../redux/operations/boardOperations";
import Style from "./IssuesList.module.scss";
import { setRepository } from "../../redux/operations/repOperations";

export function IssuesList() {

  const repoRef:any = useAppSelector((state) => state.repo.repository);
  const tokenRef = useAppSelector((state) => state.repo.token);
  const boardsRef: { id: number; title: string; items: any[] }[] =
    useAppSelector((state) => state.boards.boards);
  const statusRef: { isLoading: boolean; isError: boolean } = useAppSelector(
    (state) => state.boards.status
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = [...repoRef.adress];
    url.splice(2,1,tokenRef.toString());
    dispatch(getDone(url));
    dispatch(getTodo(url));
    dispatch(setRepository(url));
  }, [repoRef.adress, tokenRef, dispatch]);

  return (
    <>
      {boardsRef?.map(({ title, items }, index) => (
        <SkeletonTheme key={index} baseColor=" rgb(175, 173, 188)" highlightColor="#444">
          <Droppable key={index} droppableId={title}>
            {(provided: DroppableProvided) => (
              <div
                className={Style.board}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3 className="bg-white w-100 py-3">{title}</h3>
                {!statusRef.isLoading ? (
                  items.map(({ id, title }, index) => (
                    <IssuesItem key={id} id={id} title={title} index={index} />
                  ))
                ) : (
                  <p>
                    <Skeleton
                      count={5}
                      borderRadius={28}
                      width={350}
                      height={150}
                      style={{
                        margin: "20px",
                      }}
                    />
                  </p>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </SkeletonTheme>
      ))}
    </>
  );
}
