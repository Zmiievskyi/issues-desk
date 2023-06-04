import { Draggable } from "react-beautiful-dnd";
import moment from "moment";
import Style from "./IssuesItem.module.scss";

export function IssuesItem({
  id,
  index,
  title,
  created_at,
  comments,
  user,
}: {
  id: number;
  index: number;
  title: string;
  created_at: string;
  comments: any;
  user: string;
}) {
  const day = moment(created_at).startOf("day").fromNow(); // a day ago
const formatedTitle = title.length > 25 ? title.slice(0, 25) + "..." : title;
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className={Style.paper_card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="h5 mb-2">{formatedTitle}</h4>
          <div className="mb-2"><i>Created: {day}</i></div>
          <div>
            <span>User: {user}</span> | <span>Comments: {comments}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
