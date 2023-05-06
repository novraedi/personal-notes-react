import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function ActionButton({ id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item__action">
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ActionButton;
