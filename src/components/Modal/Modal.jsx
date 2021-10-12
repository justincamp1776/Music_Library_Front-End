import React from "react";


const Modal = (props) => {
  return (
    <dialog
      open={props.show}
      id="Update Song"
      style={{ backgroundColor: "#A8A9AF" }}
    >
      {console.log(props.artist)}
      <form method="dialog">
        <label>Artist:</label>
        <input name="artist" type="text" />
        <label>Title:</label>
        <input name="title" type="text" />
        <label>Album:</label>
        <input name="album" type="text" />
        <label>Genre:</label>
        <input name="genre" type="text" />
        <label>Release Date:</label>
        <input name="release_date" type="text" />

        <menu>
          <button>Cancel</button>
          <button>Confirm</button>
        </menu>
      </form>
    </dialog>
  );
};

export default Modal;
