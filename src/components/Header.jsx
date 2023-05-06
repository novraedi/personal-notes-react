import React from "react";

function Header({ onSearchTitle }) {
  return (
    <>
      <header className="note-app__header">
        <h1>Notes</h1>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Pencarian..."
          onChange={(event) => onSearchTitle(event)}
        />
      </header>
    </>
  );
}

export default Header;
