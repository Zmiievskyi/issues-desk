import { Droppable, DroppableProvided } from "react-beautiful-dnd";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "../../redux/hooks";
import { IssuesItem } from "../issues/IssuesItem";
import Style from "./IssuesList.module.scss";

interface Item {
  id: number;
  title: string;
}

interface Board {
  id: number;
  title: string;
  items: Item[];
}

interface ItemsProps {
  boards: Board[];
}

export function IssuesList({ boards }: ItemsProps) {
  const statusRef: { isLoading: boolean; isError: boolean } = useAppSelector(
    (state) => state.boards.status
  );

  return (
    <>
      {boards?.map(({ title, items }, index) => (
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
