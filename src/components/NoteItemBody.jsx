import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemBody({ body, title, createdAt }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;
