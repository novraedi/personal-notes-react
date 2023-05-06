import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    this.setState({ title: event.target.value.slice(0, this.charLimit) });
  }
  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title.length === 0 || this.state.body.length === 0)
      return alert("Judul dan Isi Catatan tidak boleh kosong!");
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }
  render() {
    return (
      <div className="note-input" style={{ marginTop: "50px" }}>
        <h1 className="note-input__title">Buat Catatan</h1>
        <h4 className="note-input__title__char-limit">
          Sisa Karakter: {50 - this.state.title.length}
        </h4>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="note-input__body">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Ini adalah judul ..."
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="Tulis Catatanmu disini ..."
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></textarea>
            <button>Buat</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteInput;
