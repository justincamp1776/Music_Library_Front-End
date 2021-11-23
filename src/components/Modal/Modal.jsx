import React from "react";

const Modal = (props) => {

  return (
    <dialog
      open={props.show}
      id="Update Song"
      style={{ backgroundColor: "#A8A9AF" }}
    >
      
      {/* <form method="dialog">
        <label>Artist:</label>
        <input name="artist" type="text" value={props.songs.artist}/>
        <label>Title:</label>
        <input name="title" type="text" value={props.songs.title}/>
        <label>Album:</label>
        <input name="album" type="text" value={props.songs.album} />
        <label>Genre:</label>
        <input name="genre" type="text" value={props.songs.genre} />
        <label>Release Date:</label>
        <input name="release_date" type="text" value={props.songs.title} />

        <menu><button>Cancel</button>
          <button>Confirm</button>
        </menu>
      </form> */}
    </dialog>
  );
};

export default Modal;