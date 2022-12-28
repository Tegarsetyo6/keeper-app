import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isActive, setIsActive] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title === '' && note.content === '') {
    } else {
      props.onAdd(note);
      setNote({
        title: '',
        content: '',
      });
      event.preventDefault();
    }
  }

  function clickHandle() {
    setIsActive(true);
  }

  return (
    <div>
      <form className="create-note">
        {isActive && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
        <textarea name="content" onChange={handleChange} onClick={clickHandle} value={note.content} placeholder="Take a note..." rows={isActive ? 3 : 1} />
        <Zoom in={isActive}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
