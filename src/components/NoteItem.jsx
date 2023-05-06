import React from "react";
import NoteItemBody from "./NoteItemBody";
import ActionButton from "./ActionButton";

function NoteItem({
  title,
  body,
  createdAt,
  onDelete,
  id,
  onArchive,
  archived,
}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <ActionButton
        onDelete={onDelete}
        id={id}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;
