import React from "react";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTitle: "",
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onHandleSearchTitle = this.onHandleSearchTitle.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }
  onAddNoteHandler({ title, body }) {
    const currentDate = new Date().toISOString();
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title: title,
          body: body,
          createdAt: currentDate,
          archived: false,
        },
      ],
    }));
  }
  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onHandleSearchTitle(event) {
    const valueTitle = event.target.value;
    // const filteredNotes = getInitialData().filter((note) =>
    //   note.title.toLowerCase().includes(valueTitle)
    // );
    this.setState({ searchTitle: valueTitle });
  }
  onArchiveNoteHandler(id) {
    const archiveNote = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: archiveNote });
  }
  render() {
    const activeNotes = this.state.notes.filter(
        (note) =>
          !note.archived &&
          note.title
            .toLowerCase()
            .includes(this.state.searchTitle.toLowerCase())
      ),
      archivedNotes = this.state.notes.filter(
        (note) =>
          note.archived &&
          note.title
            .toLowerCase()
            .includes(this.state.searchTitle.toLowerCase())
      );

    return (
      <>
        <Header onSearchTitle={this.onHandleSearchTitle} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <div>
            <h1>Catatan Aktif</h1>
            <NoteList
              notes={activeNotes}
              onDelete={this.onDeleteNoteHandler}
              onArchive={this.onArchiveNoteHandler}
            />
          </div>
          <div>
            <h1>Arsip</h1>
            <NoteList
              notes={archivedNotes}
              onDelete={this.onDeleteNoteHandler}
              onArchive={this.onArchiveNoteHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NoteApp;
