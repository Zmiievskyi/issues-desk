import { Draggable } from "react-beautiful-dnd";
import Style from "./IssuesItem.module.scss";

export function IssuesItem({
  id,
  index,
  title,
}: {
  id: number;
  index: number;
  title: string;
}) {
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className={Style.paper_card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{title}</p>
          <p>{id}</p>
        </div>
      )}
    </Draggable>
  );
}
